let location = null
scene.setBackgroundColor(10)
let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
color.setColor(7, color.rgb(151, 202, 50))
color.setColor(6, color.rgb(43, 151, 94))
color.setColor(8, color.rgb(64, 90, 180))
color.setColor(9, color.rgb(40, 127, 222))
color.setColor(10, color.rgb(154, 214, 255))
color.setColor(13, color.rgb(170, 116, 66))
color.setColor(11, color.rgb(156, 90, 52))
color.setColor(12, color.rgb(104, 54, 28))
color.setColor(14, color.rgb(79, 47, 28))
tiles.setCurrentTilemap(tilemap`level1`)
scene.runTileAnimation(
assets.tile`myTile`,
assets.animation`waterAnim`,
400,
TileAnimationOrder.LoopSync
)
scene.runTileAnimation(
assets.tile`water2`,
assets.animation`waterAnim0`,
400,
TileAnimationOrder.LoopSync
)
scene.runTileAnimation(
assets.tile`grass0`,
assets.animation`aniGrass0`,
200,
TileAnimationOrder.Delayed,
10
)
scene.runTileAnimation(
assets.tile`flowers`,
assets.animation`flowersAni`,
100,
TileAnimationOrder.Delayed,
44
)
scene.runTileAnimation(
assets.tile`gold0`,
assets.animation`goldAni`,
200,
TileAnimationOrder.Random
)
scene.runTileAnimation(
assets.tile`web`,
assets.animation`webAni`,
100,
TileAnimationOrder.Delayed,
200
)
scene.runTileAnimation(
assets.tile`tree1`,
assets.animation`treeAni`,
300,
TileAnimationOrder.Delayed,
50
)
