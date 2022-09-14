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
More usage details in the [store tests](https://github.com/dstanesc/ipfs-block-store/blob/e5a1198cbe30d53f45f4a9f1ae663df9e4f1ed21/src/__tests__/block-store.test.ts#L12)

## Build

```sh
npm run clean
npm install
npm run build
npm run test
```

## Licenses

Licensed under either [Apache](./LICENSE-APACHE) or [MIT](./LICENSE-MIT) at your option.
