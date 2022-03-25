
/* MAIN */

const decode = ( base64: string ): Uint8Array => {

  if ( typeof atob === 'function' ) { // Browser

    const binary = atob ( base64 );
    const u8 = new Uint8Array ( binary.length );

    for ( let i = 0, l = binary.length; i < l; i++ ) {

      u8[i] = binary.charCodeAt ( i );

    }

    return u8;

  } else { // Node.js

    const buffer = Buffer.from ( base64, 'base64' );

    return new Uint8Array ( buffer.buffer, buffer.byteOffset, buffer.byteLength );

  }

};

/* EXPORT */

export default decode;
