
/* IMPORT */

import {describe} from 'fava';
import {Buffer} from 'node:buffer';
import U8 from 'uint8-encoding';
import decodeBrowser from '../dist/browser.js';
import decodeNode from '../dist/node.js';
import Fixtures from './fixtures.js';

/* MAIN */

describe ( 'decodeBase64', () => {

  for ( const [decode, name] of [[decodeBrowser, 'browser'], [decodeNode, 'node']] ) {

    describe ( name, it => {

      it ( 'returns an actual Uint8Array', t => {

        t.is ( decode ( 'Zm9v' ).constructor, Uint8Array );

      });

      it ( 'works with strings', t => {

        for ( const fixture of Fixtures ) {

          const encoded = U8.encode ( fixture );
          const base64 = Buffer.from ( fixture ).toString ( 'base64' );
          const decoded = decode ( base64 );

          t.deepEqual ( decoded, encoded );

        }

      });

    });

  }

});
