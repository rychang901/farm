// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`3200080002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020201010101020201040303030305020204030303030502020403030303050101040303030305020104030303030501010403030303050202020103030303030301010303030303030202030303030303020203030303030301010303030303030202030303030303020201010303030303030101030303030303010103030303030302020303030303030202030303030303010203030303030302020201030303030303010103030303030302020303030303030101030303030303020203030303030302010303030303030202020103030303030302020303030303030101030303030303010203030303030301010303030303030202030303030303020202010703030303060202070303030306020207030303030602020703030303060202070303030306010107030303030602020202020202020202010202020202020202020202020202020202020202020202020202020202020202020202010101010102`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass3,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001070801070801070801010405050505090909090909090909090104050505050101010201010102010101040505050502010101010101010102010405050505010101010102010101010106030303030101020101010101010201010101020101010101010101010101010201010101010201010201010201010101010201010101010101010101010101010101010101010201020101010201010201010102010101010101020101010101020101010102010101010101010201010101010101010101010201020101010201010102010101010201010101010101010101010102010101010102010102010101020101010102010101010101010101010101`, img`
. . . . . . . . . . . . 2 2 2 2 
. . . . . . . . . . . . 2 2 2 2 
. . . . . . . . . . . . 2 2 2 2 
. . . . . . . . . . . . 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile13,myTiles.tile14,myTiles.tile3,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Field":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile10":
            case "tile13":return tile13;
            case "myTile11":
            case "tile14":return tile14;
            case "myTile":
            case "tile3":return tile3;
            case "myTile1":
            case "tile7":return tile7;
            case "myTile5":
            case "tile8":return tile8;
            case "myTile6":
            case "tile9":return tile9;
            case "myTile7":
            case "tile10":return tile10;
            case "myTile8":
            case "tile11":return tile11;
            case "myTile9":
            case "tile12":return tile12;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
