
/* IMPORT */

import Buffer from 'node-buffer-encoding';

/* MAIN */

const decode = ( base64: string ): Uint8Array => {

  return Buffer.decode ( base64, 'base64' );

};

/* EXPORT */

export default decode;
