controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    proj = darts.create(img`
        . . . . . . . . 
        . . 7 7 7 7 . . 
        . 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 . 
        . . 7 7 7 7 . . 
        . . . . . . . . 
        `, SpriteKind.Projectile, character.x, character.y)
    proj.angle = 0 - Math.abs(degrees)
    proj.pow = 150
    proj.gravity = 0
    proj.throwDart()
})
function degree_to_radian (deg: number) {
    return spriteutils.consts(spriteutils.Consts.Pi) / 180 * deg
}
let proj: Dart = null
let character: Sprite = null
let degrees = 0
scene.setBackgroundColor(11)
degrees = 270
let radius = 20
let aim_sensitivity = 3
character.z = 2
character.setStayInScreen(true)
controller.moveSprite(character, 100, 100)
let aim = sprites.create(img`
    . . . . . . . . 
    . . 1 1 1 1 . . 
    . 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 . 
    . . 1 1 1 1 . . 
    . . . . . . . . 
    `, SpriteKind.Player)
aim.z = 1
game.onUpdate(function () {
    if (controller.player2.isPressed(ControllerButton.Left)) {
        degrees += 0 - aim_sensitivity * 1
    }
    if (controller.player2.isPressed(ControllerButton.Right)) {
        degrees += aim_sensitivity * 1
    }
    if (degrees < 0) {
        degrees = 359
    } else if (degrees > 359) {
        degrees = 0
    }
    aim.x = character.x + radius * Math.cos(degree_to_radian(degrees))
    aim.y = character.y + radius * Math.sin(degree_to_radian(degrees))
})
game.onUpdate(function () {
    if (controller.player2.isPressed(ControllerButton.Left)) {
        degrees += 0 - aim_sensitivity * 1
    }
    if (controller.player2.isPressed(ControllerButton.Right)) {
        degrees += aim_sensitivity * 1
    }
    if (degrees < 0) {
        degrees = 359
    } else if (degrees > 359) {
        degrees = 0
    }
    aim.x = character.x + radius * Math.cos(degree_to_radian(degrees))
    aim.y = character.y + radius * Math.sin(degree_to_radian(degrees))
})
