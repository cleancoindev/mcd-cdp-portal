# Aqua Liquidity Protocol - a takerTAO project -> Borrow/Save/Vault

[![Build Status][build]][build-url]
[![Coverage Status][cover]][cover-url]

## The official Taker dapp for managing Vaults and generating Tao

### Prerequisites

Have installed:

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/) >10.0
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)

### Installation

1.  yarn`

### Running Aqua

- `yarn start`
- Go to http://localhost:3000

For hardware wallet support:

- `HTTPS=true yarn start`
- Go to https://localhost:3000

### Developing with a local testchain

1. Clone either [tao.js](https://github.com/cleancoindev/tao.js) or the [testchain](https://github.com/cleancoindev/testchain) repo

2. Start the testchain
   1. If using tao.js, run `yarn && yarn testchain`
   2. If using the testchain repo directly, run `scripts/launch`

3) Navigate to `http://localhost:3000?network=testnet&simplePriceFeeds=1`

_see [this PR](https://github.com/cleancoindev/mct-cdp-portal/pull/26) for more details_

[build]: https://circleci.com/gh/cleancoindev/mct-cdp-portal.svg?style=svg
[build-url]: https://circleci.com/gh/cleancoindev/mct-cdp-portal
[cover]: https://codecov.io/gh/cleancoindev/mct-cdp-portal/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/cleancoindev/mct-cdp-portal
