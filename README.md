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

# Path of Exile API

## Setup

```typescript
import { PathOfExile } from "@klayver/poe-api-wrappers";

// Alternatively, you can also import specific endpoints directly
import { Ladders, Leagues } from "@klayver/poe-api-wrappers/poe";
```

Before you can start making requests to the official API, you must set your user agent. This is a requirement by Grinding Gear Games. If you skip this step, making requests will most likely result in an error.

```typescript
PathOfExile.Settings.setUserAgent("myapp", "1.0.0", "contact@me.com");
```

## Authorization

Some API endpoints are protected and require authorization. You can supply a session ID and/or an official OAuth 2 access token.

As of right now, some endpoints may only be accessible using one or the other authorization method. For example, the item filter endpoint only works with OAuth 2 and the account avatars endpoint only works with a session ID. You can find out which authorization method is supported by an endpoint in the [documentation](https://klayver.github.io/poe-api-wrappers/) of this module. In case both authorization methods are available and an access token has been set, OAuth 2 will be used.

This module offers basic functionality to generate an authorization URL and create access tokens. More information, including examples, can be found in the [OAuth module documentation](https://klayver.github.io/poe-api-wrappers/modules/pathofexile.oauth.html). Check out the [official developer API](https://www.pathofexile.com/developer/docs/index#gettingstarted) to learn how to get access to OAuth 2.

```typescript
PathOfExile.Settings.sessionId = "mys3ss10n1d";
PathOfExile.Settings.accessToken = "my4cc3sst0k3n";
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

## Examples

> ⚠️ Many APIs are rate limited, so if you want to hit an API often in a short timeframe, consider implementing logic to comply with rate limits.

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

# poe.ninja API

## Setup

```typescript
import { Ninja } from "@klayver/poe-api-wrappers";
```

## Examples

### Get currency exchange rates for currency items in Standard league

```typescript
const collection = await Ninja.Currency.get("Standard", "Currency");

for (const currency of collection.entries) {
    console.log(`${currency.name} costs ${currency.chaosEquivalent} Chaos Orb`);
}
```
