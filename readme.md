# Decode Base64

A tiny function for decoding base64 strings into Uint8Arrays, useful for bundling and loading WASM modules.

## Install

```sh
npm install decode-base64
```

## Usage

```ts
import decode from 'decode-base64';

// let's decode a base64 string to a Uint8Array

decode ( 'base64 string here...' ); // => Uint8Array
```

## License

MIT © Fabio Spampinato
