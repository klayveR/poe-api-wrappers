# Path of Exile API Wrappers

[![NPM version](https://img.shields.io/npm/v/@klayver/poe-api-wrappers?style=for-the-badge)](https://www.npmjs.com/package/@klayver/poe-api-wrappers) [![NPM license](https://img.shields.io/npm/l/@klayver/poe-api-wrappers?style=for-the-badge)](https://github.com/klayveR/poe-api-wrappers/blob/main/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/klayveR/poe-api-wrappers?style=for-the-badge)](https://github.com/klayveR/poe-api-wrappers/issues) [![GitHub language](https://img.shields.io/github/languages/top/klayveR/poe-api-wrappers?style=for-the-badge)](https://github.com/klayveR/poe-api-wrappers)

This library was created to make interacting with the official and third-party APIs for Path of Exile easier. Data can be requested with a simple function call, the responses are then converted into fully typed class objects which you can interact with. For example, when posting a search query to the trade API, you can immediately request the listings by calling a function on the search result object which contains the hashes (see [Examples](#examples)).

Please check out the [documentation](https://klayver.github.io/poe-api-wrappers/) for more information.

Since there are so many APIs with varying response structures, things may be incorrect or missing. If you notice something that needs to be added or fixed, please submit an [issue](https://github.com/klayveR/poe-api-wrappers/issues).

# Getting started

**Install with npm:**

```bash
$ npm i @klayver/poe-api-wrappers --save
```

# Contributing

Please refer to [CONTRIBUTING.md](https://github.com/klayveR/poe-api-wrappers/blob/main/CONTRIBUTING.md).

# Examples

> ⚠️ The following examples do not handle errors to keep it simple. You should wrap your calls in a try/catch block or do whatever you do to catch errors (see [Handling errors](#handling-errors)).

## Path of Exile API

> Many APIs are rate limited, so if you want to hit an API often in a short timeframe, consider implementing logic to comply with rate limits.

### Setup

```typescript
import { PathOfExile } from "@klayver/poe-api-wrappers";
```

Before making requests to the official API, you should set your user agent, as requested by GGG [here](https://www.pathofexile.com/forum/view-thread/3019033/page/1#p23790007).

```typescript
PathOfExile.Settings.userAgent = "my-awesome-tool-name, contact@me.com";
```

You can also define a session ID, which will be used in every request you make. Some endpoints require the session ID to be defined (see documentation).

```typescript
PathOfExile.Settings.sessionId = "y0uRs3ss10n1dh3r3";
```

### Get 10 public stash tab chunks and do something with them

```typescript
let chunk = await PathOfExile.PublicStashTabs.getChunk();

for (let i = 0; i < 9; i++) {
    console.log(`This chunk has ${chunk.stashes.length} stashes.`);
    chunk = await chunk.getNext();
}
```

### Get the entire Standard league ladder and filter it by online players

```typescript
// Get the ladder with the first 200 entries
const ladder = await PathOfExile.Ladders.get("Standard", { limit: 200 });

// Request the remaining entries in chunks of 200 until there are no entries left
while ((await ladder.getNextEntries()) != null) {
    console.log(`Current entries: ${ladder.entries.length}`);
}

// Filter by online players
const online = ladder.filterBy("online", true);
console.log(`${online.length}/${ladder.total} players are currently online.`);
```

### Execute a search query and get the prices for the first 10 results

```typescript
const query = {
    query: {
        status: { option: "online" },
        name: "Shavronne's Wrappings",
        type: "Occultist's Vestment",
    },
    sort: { price: "asc" },
};

const search = await PathOfExile.Trade.search("Standard", query);
const results = await search.getNextItems();

if (results != null) {
    for (const result of results) {
        const price = result.listing.price;
        console.log(`Item is being sold for ${price.amount} ${price.currency}`);
    }
}
```

## poe.ninja API

### Setup

```typescript
import { Ninja } from "@klayver/poe-api-wrappers";
```

### Get currency exchange rates for currency items in Standard league

```typescript
const collection = await Ninja.Currency.get("Standard", "Currency");

for (const currency of collection.entries) {
    console.log(`${currency.name} costs ${currency.chaosEquivalent} Chaos Orb`);
}
```

## Handling errors

Requests to the Path of Exile API throw custom errors when something goes wrong. The thrown custom error class include the same error codes as the ones documented in the [official developer API documentation](https://www.pathofexile.com/developer/docs/index#errors). Please note that you should also check for other errors, which might occur when, for example, no internet connection is available.

```typescript
try {
    await PathOfExile.Account.getProfile();
} catch (error: unknown) {
    if (error instanceof PathOfExile.APIError) {
        console.log(`Request failed with code ${error.code}: ${error.message}`);
    }

    // Handle other errors...
}
```
