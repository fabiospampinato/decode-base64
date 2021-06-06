# Decode Base64

A tiny function for decoding base64 strings into ArrayBuffer objects, useful for bundling and loading WASM modules.

## Install

```sh
npm install --save decode-base64
```

## Usage

```ts
import decode from 'decode-base64';

decode ( 'base64 string here...' ); // => ArrayBuffer
```

## License

MIT © Fabio Spampinato
