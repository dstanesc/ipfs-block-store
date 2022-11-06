# IPFS Block Store

Simple content-addressable storage (CAS) based on [IPFS](https://ipfs.tech/).

## API

```ts
put: (block: { cid: any, bytes: Uint8Array }) => Promise<void>
get: (cid: any) => Promise<Uint8Array>
```

## Usage

```js
// ipfs api
import { create as ipfsApi } from 'ipfs-http-client'

// connect to a local ipfs service
const ipfs = ipfsApi({ url: '/ip4/192.168.1.231/tcp/5001' })

// optional cache
const cache = {}

// ipfs-block-store api
const { get, put } = blockStore({ /*cache,*/ ipfs  })
```


## Build

```sh
npm run clean
npm install
npm run build
npm run test
```

## Licenses

Licensed under either [Apache 2.0](http://opensource.org/licenses/MIT) or [MIT](http://opensource.org/licenses/MIT) at your option.
