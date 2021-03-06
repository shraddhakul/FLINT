const express = require( 'express' );
const app     = express();

app.use( express.static( 'public' ) );
app.use( '/', express.static( 'public/html' ) );

app.listen( 3000 );
