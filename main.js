var LavaPosition = [[ 0 , 1 ] , [ 1 , 0 ] , [ -1 , 0 ] , [ 0 , -1 ]];
World.setBlockChangeCallbackEnabled( 10 , true );
Callback.addCallback( "BlockChanged" , function ( coords , oldBlock , newBlock , region ) {
if ( newBlock.id == 10 && newBlock.data != 0 ) {
    if ( World.getBlockID( coords.x , coords.y - 1 , coords.z ) != 0 ) {
        for ( var i = 0 ; i < 4 ; i ++ ) {
            if ( World.getBlockID( coords.x + LavaPosition[ i ][ 0 ] , coords.y , coords.z + LavaPosition[ i ][ 1 ] ) == 10 ) {
            if ( World.getBlock( coords.x + LavaPosition[ i ][ 0 ] , coords.y , coords.z + LavaPosition[ i ][ 1 ] ).data == 0 ) {
                var Source = [ coords.x + LavaPosition[ i ][ 0 ] , coords.z + LavaPosition[ i ][ 1 ] ];
                for ( var a = 0 ; a < 4 ; a ++ ) {
                    let Source2 = [ LavaPosition[ a ][ 0 ] + coords.x , LavaPosition[ a ][ 1 ] + coords.z ];
                    if ( Source2[ 0 ] == Source[ 0 ] && Source2[ 1 ] == Source[ 1 ] ) {
                        break;
                    } else {
                    if ( World.getBlockID( Source2[ 0 ] , coords.y , Source2[ 1 ] ) == 10 ) {
                    if ( World.getBlock( Source2[ 0 ] , coords.y , Source2[ 1 ] ).data == 0 ) {
                        World.setBlock( coords.x , coords.y , coords.z , 10 , 0 );
                        return;
                    }
                    }
                    }
                }
            }
            }
        }
    }
}
});