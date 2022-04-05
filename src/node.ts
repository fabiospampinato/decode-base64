
/* IMPORT */

import {Buffer} from 'node:buffer';

/* MAIN */

const decode = ( base64: string ): Uint8Array => {

  const buffer = Buffer.from ( base64, 'base64' );

  return new Uint8Array ( buffer.buffer, buffer.byteOffset, buffer.byteLength );

};

/* EXPORT */

export default decode;
