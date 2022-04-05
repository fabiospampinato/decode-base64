
/* MAIN */

const decode = ( base64: string ): Uint8Array => {

  const binary = atob ( base64 );
  const u8 = new Uint8Array ( binary.length );

  for ( let i = 0, l = binary.length; i < l; i++ ) {

    u8[i] = binary.charCodeAt ( i );

  }

  return u8;

};

/* EXPORT */

export default decode;
