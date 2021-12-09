# Path of Exile API Wrappers

[![NPM version](https://img.shields.io/npm/v/@klayver/poe-api-wrappers?style=for-the-badge)](https://www.npmjs.com/package/@klayver/poe-api-wrappers) [![NPM license](https://img.shields.io/npm/l/@klayver/poe-api-wrappers?style=for-the-badge)](https://github.com/klayveR/poe-api-wrappers/blob/main/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/klayveR/poe-api-wrappers?style=for-the-badge)](https://github.com/klayveR/poe-api-wrappers/issues) [![GitHub language](https://img.shields.io/github/languages/top/klayveR/poe-api-wrappers?style=for-the-badge)](https://github.com/klayveR/poe-api-wrappers)

This library was created to make interacting with the official and third-party APIs for Path of Exile easier. Data can be requested with a simple function call, the responses are then converted into fully typed class objects which you can interact with. For example, when posting a search query to the trade API, you can immediately request the listings by calling a function on the search result object which contains the hashes (see [Examples](#examples)).

Please check out the [documentation](https://klayver.github.io/poe-api-wrappers/) for more information.

Since there are so many APIs with varying response structures, things may be incorrect or missing. If you notice something that needs to be added or fixed, please submit an [issue](https://github.com/klayveR/poe-api-wrappers/issues).

# Contributing

Please refer to [CONTRIBUTING.md](https://github.com/klayveR/poe-api-wrappers/blob/main/CONTRIBUTING.md).

# Table of contents

-   [Installation](#installation)
-   [Path of Exile Wrapper](#path-of-exile-wrapper)
    -   [Usage](#usage)
        -   [Default instance](#default-instance)
        -   [Setting the user agent](#setting-the-user-agent)
    -   [Example usage](#example-usage)
        -   [Requesting data on wrapper instance](#requesting-data-on-wrapper-instance)
        -   [Requesting associated data on response objects](#requesting-associated-data-on-response-objects)
-   [Path of Exile OAuth Wrapper](#path-of-exile-oauth-wrapper)
-   [poe.ninja Wrapper](#poeninja-wrapper)

# Installation

**Install with npm:**

```bash
$ npm i @klayver/poe-api-wrappers --save
```

# Path of Exile Wrapper

The endpoints used in this wrapper are not officially supported by Grinding Gear Games. They may be changed, restricted or removed at any time. When possible, you should be using the [OAuth wrapper](#path-of-exile-oauth-wrapper), which uses officially supported endpoints.

Some request options are intentionally not included, such as the `compact` option when fetching a list of leagues.

## Usage

```typescript
import { PathOfExileWrapper } from "@klayver/poe-api-wrappers";

const poeApi = new PathOfExileWrapper();
await poeApi.requestLeagues();
```

### Default instance

Instead of instantiating a wrapper instance, you can use the default instance.

```typescript
await PathOfExileWrapper.default.requestLeagues();
```

### Setting the user agent

Before you can start making requests, you must set your user agent. This is a requirement by Grinding Gear Games. You can either supply an object which will automatically be converted into the format requested by GGG (recommended) or supply a custom string. If you skip this step, you will most likely not be able to make successful requests.

```typescript
poeApi.userAgent = {
    clientId: "myapp",
    version: "1.0.0",
    contact: "myemail@whatever.com",
};

// Alternatively, use a custom string
poeApi.userAgent = "custom user agent";
```

## Example usage

_To keep this example short, it is assumed that certain elements exist (first ladder entry) and data is accessible (character list is public). You should always make sure that the request you want to make is valid._

In this example, we will do the following:

1. Get an overview of the Standard league on the PC realm
2. Get the ladder of the league sorted by solo Delve depth
3. Get the items of the rank 1 character on the ladder

### Requesting data on wrapper instance

You can just request everything directly on the wrapper and use the data from previous responses as parameters.

```typescript
const league = await poeApi.requestLeagues("Standard", { realm: "pc" });
const ladder = await poeApi.requestLadder(league.id, { sort: "depthsolo" });
const player = ladder[0];
const items = await poeApi.requestCharacterItems(player.account.name, player.character.name);
```

### Requesting associated data on response objects

Alternatively, you can request associated data by calling request methods on the response objects themselves. This way, you don't need to pass data from previous responses.

```typescript
const league = await poeApi.requestLeague("Standard", { realm: "pc" });
const ladder = await league.requestLadder({ sort: "depthsolo" });
const player = ladder[0];
const items = await player.character.requestItems();
```

Please note that when calling request methods on response objects, the [default instance](#default-instance) of the wrapper will be used. If you need to make the request from a specific instance, you can pass it as a parameter.

```typescript
const ladder = await league.requestLadder({ sort: "depthsolo" }, poeApiInstance);
```

# Path of Exile OAuth Wrapper

...

# poe.ninja Wrapper

...
