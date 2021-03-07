namespace SpriteKind {
    export const Wheat_Seed = SpriteKind.create()
    export const Hoe = SpriteKind.create()
    export const Carrot_Seed = SpriteKind.create()
    export const Corn_Seed = SpriteKind.create()
    export const Tool = SpriteKind.create()
}
function Crop_Buttons () {
    if (controller.A.isPressed()) {
        A_Button_Press_Times += 1
        if (A_Button_Press_Times == 1) {
            animation.runImageAnimation(
            Tools,
            [img`
                ......cccccc........
                ......cccccc........
                ....cc11bbbbcc......
                ....cc11bbbbcc......
                ......ccccbbbbeedd..
                ......ccccbbbbeedd..
                ..........cceeddee..
                ..........cceeddee..
                ..........eeddeebbcc
                ..........eeddeebbcc
                ........eeddeebbbbcc
                ........eeddeebbbbcc
                ......eeddee..cccc..
                ......eeddee..cccc..
                ....eeddee..........
                ....eeddee..........
                ..eeddee............
                ..eeddee............
                eeddee..............
                eeddee..............
                ddee................
                ddee................
                `],
            500,
            true
            )
            Tools.setKind(SpriteKind.Hoe)
        }
        if (A_Button_Press_Times == 2) {
            animation.runImageAnimation(
            Tools,
            [img`
                . . . . . . 4 5 4 . . . . . . . 
                . . . . . . 5 5 5 . . . . . . . 
                . . . . . . 4 5 4 . . . . . . . 
                . . . . . . 5 5 5 . . . . . . . 
                . . . . . . 4 5 4 . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 5 5 5 . . . . . 
                . . . . . . . 5 5 5 . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                `],
            500,
            true
            )
            Tools.setKind(SpriteKind.Wheat_Seed)
        }
        if (A_Button_Press_Times == 3) {
            animation.runImageAnimation(
            Tools,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . 7 . 5 5 7 5 5 . 7 . . . . 
                . . . 7 7 5 7 7 7 5 7 7 . . . . 
                . . . . 7 7 7 7 7 7 7 . . . . . 
                . . . . . 7 7 7 7 7 . . . . . . 
                . . . . . 7 7 7 7 7 . . . . . . 
                . . . . . 7 7 7 7 7 . . . . . . 
                . . . . . . 7 7 7 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            500,
            true
            )
            Tools.setKind(SpriteKind.Corn_Seed)
        }
        if (A_Button_Press_Times == 4) {
            animation.runImageAnimation(
            Tools,
            [img`
                . . . . . 7 7 7 7 . . . . . . . 
                . . . . . . 7 7 . . . . . . . . 
                . . . . . 7 7 7 7 . . . . . . . 
                . . . . 4 4 4 4 4 4 . . . . . . 
                . . . . 4 4 4 4 4 4 . . . . . . 
                . . . . 4 4 4 4 4 4 . . . . . . 
                . . . . 4 4 4 4 4 4 . . . . . . 
                . . . . 4 4 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 . . . . . . . 
                . . . . . 4 4 4 4 . . . . . . . 
                . . . . . . 4 4 . . . . . . . . 
                . . . . . . 4 4 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            500,
            true
            )
            Tools.setKind(SpriteKind.Carrot_Seed)
        }
        if (A_Button_Press_Times >= 5) {
            A_Button_Press_Times = 0
        }
    }
}
function Crops () {
    tiles.setTilemap(tilemap`level1`)
    scene.cameraFollowSprite(Tools)
    controller.moveSprite(Tools)
}
function Cow_Field () {
    tiles.setTilemap(tilemap`level2`)
    Cow1 = sprites.create(img`
        .....ff.....f....................
        fff.fbbf...fbf.fff...............
        f33ffffffffffff33f...............
        .f3feeeeedddddf3f................
        ..feeeeeeddddddf.................
        .feeeeeeeddddddf.................
        .feeefeeeddfdddf.................
        .feeefeeeddfddddf................
        .feeefeeeddfddddf................
        ffeeefeedddfddddf................
        feeeefeedddfddddf.fffff..........
        feeeeeedddddddddffeeeeeffff......
        feeeeddddddddddfdeeeeeeeeeffff...
        fddddfffffffdddfdeeeeeeeeeddfef..
        .fddf3333333fddfdeeeeeeeeeddfef..
        .fdf33f333f33fdfddeeeeeeedddfeef.
        ..f333f333f333fddddeeeeeddddffeef
        ...f333333333fdddddddddddddf..fff
        ....fffffffffddddddddddddddf.....
        ........fddddddddddddddddddf.....
        ........fddddddddddddddddddf.....
        ........feeefdddfddddfddddf......
        ........feeeffddfddddfddddf......
        .........feeffdfffffffdddf.......
        .........ffff.ff......fff........
        `, SpriteKind.Player)
    Cow1.setVelocity(50, 50)
    Cow1.setBounceOnWall(true)
    Cow2 = sprites.create(img`
        .....ff.....f....................
        fff.fbbf...fbf.fff...............
        f33ffffffffffff33f...............
        .f3ffffff11111f3f................
        ..fffffff111111f.................
        .ffffffff111111f.................
        .ffffefff11e111f.................
        .ffffefff11e1111f................
        .ffffefff11e1111f................
        fffffeff111e1111f................
        fffffeff111e1111f.fffff..........
        fffffff111111111fffffffffff......
        fffff1111111111f1fffffffffffff...
        f1111fffffff111f1fffffffff11fff..
        .f11f3333333f11f1fffffffff11fff..
        .f1f33f333f33f1f11fffffff111ffff.
        ..f333f333f333f1111fffff1111fffff
        ...f333333333f1111111111111f..fff
        ....fffffffff11111111111111f.....
        ........f111111111111111111f.....
        ........f111111111111111111f.....
        ........fffff111f1111f1111f......
        ........ffffff11f1111f1111f......
        .........fffff1fffffff111f.......
        .........ffff.ff......fff........
        `, SpriteKind.Player)
    Cow2.setVelocity(50, 50)
    Cow2.setBounceOnWall(true)
    Cow3 = sprites.create(img`
        .....ff.....f....................
        fff.fbbf...fbf.fff...............
        f33ffffffffffff33f...............
        .f3f11111dddddf3f................
        ..f111111ddddddf.................
        .f1111111ddddddf.................
        .f111f111ddfdddf.................
        .f111f111ddfddddf................
        .f111f111ddfddddf................
        ff111f11dddfddddf................
        f1111f11dddfddddf.fffff..........
        f111111dddddddddff11111ffff......
        f1111ddddddddddfd111111111ffff...
        fddddfffffffdddfd111111111ddf1f..
        .fddf3333333fddfd111111111ddf1f..
        .fdf33f333f33fdfdd1111111dddf11f.
        ..f333f333f333fdddd11111ddddff11f
        ...f333333333fdddddddddddddf..fff
        ....fffffffffddddddddddddddf.....
        ........fddddddddddddddddddf.....
        ........fddddddddddddddddddf.....
        ........f111fdddfddddfddddf......
        ........f111ffddfddddfddddf......
        .........f11ffdfffffffdddf.......
        .........ffff.ff......fff........
        `, SpriteKind.Player)
    Cow3.setVelocity(50, 50)
    Cow3.setBounceOnWall(true)
    Feed = sprites.create(img`
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Water = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 6 6 6 9 6 6 . . . . . 
        . . . 6 6 6 6 6 6 9 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
}
let Water: Sprite = null
let Feed: Sprite = null
let Cow3: Sprite = null
let Cow2: Sprite = null
let Cow1: Sprite = null
let A_Button_Press_Times = 0
let Tools: Sprite = null
Tools = sprites.create(img`
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Tool)
Cow_Field()
game.onUpdateInterval(500, function () {
	
})
