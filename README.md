# IPFS Based Block Store

IPFS based persistence layer for the [chunky bytes](https://www.npmjs.com/package/@dstanesc/store-chunky-bytes) module. 

## Usage

```js
// connect to a local ipfs service
const ipfs = ipfsApi({ url: '/ip4/192.168.1.231/tcp/5001' })

// optional cache
const cache = {}

// ipfs-block-store api
const { get, put } = blockStore({ /*cache,*/ ipfs  })

```
More details in the [store tests]()

## Build

```sh
npm run clean
npm install
npm run build
npm run test
```

## Licenses

Licensed under either [Apache](./LICENSE-APACHE) or [MIT](./LICENSE-MIT) at your option.
