input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    microIoT.microIoT_SendMessage("close-curtain", microIoT.TOPIC.topic_0)
    microIoT.microIoT_showUserText(1, "")
    microIoT.microIoT_showUserText(1, "curtain closed")
})
function 显示数字 (数字: number) {
    if (数字 >= 0 && 数字 <= 9) {
        basic.showNumber(数字)
    } else if (数字 < 0 || 数字 > 19) {
        basic.showLeds(`
            # # . # #
            # . . # .
            # # . # .
            # . . # .
            # # . # .
            `)
    } else if (数字 == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    } else if (数字 == 11) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
    } else if (数字 == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    } else if (数字 == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (数字 == 14) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    } else if (数字 == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (数字 == 16) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (数字 == 17) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
    } else if (数字 == 18) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
    } else {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . # # #
            `)
    }
}
microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (message) {
    if (message == "L") {
        microIoT.microIoT_showUserText(0, "recved L ")
    }
})
input.onButtonPressed(Button.A, function () {
    microIoT.microIoT_SendMessage("livingroom-lightbelt-toggle", microIoT.TOPIC.topic_0)
    microIoT.microIoT_showUserText(1, "")
    microIoT.microIoT_showUserText(1, "lightbelt toggled")
})
input.onButtonPressed(Button.AB, function () {
    microIoT.microIoT_SendMessage("open-curtain", microIoT.TOPIC.topic_0)
    microIoT.microIoT_showUserText(1, "")
    microIoT.microIoT_showUserText(1, "curtain opened")
})
input.onButtonPressed(Button.B, function () {
    microIoT.microIoT_SendMessage("livingroom-mainlight-toggle", microIoT.TOPIC.topic_0)
    microIoT.microIoT_showUserText(1, "")
    microIoT.microIoT_showUserText(1, "mainlight toggled")
})
function 亮灯 (编号: number, 时长: number, 颜色: number) {
    rt = 时长
    r = rt / 1000
    for (let index = 0; index < r - 4; index++) {
        microIoT.microIoT_setIndexColor(编号, 颜色)
        显示数字(rt / 1000)
        rt += -1000
        basic.pause(1000)
    }
    for (let index = 0; index < 4; index++) {
        microIoT.microIoT_setIndexColor(编号, 颜色)
        显示数字(rt / 1000)
        rt += -1000
        basic.pause(500)
        microIoT.microIoT_setIndexColor(编号, 0x000000)
        basic.pause(500)
    }
}
let r = 0
let rt = 0
microIoT.microIoT_initDisplay()
let 绿色 = 65280
let 红色 = 16711680
let 黄色 = 16776960
microIoT.microIoT_WIFI("ahitz", "Woolnioahd+_18")
microIoT.microIoT_MQTT(
"WTqUUbcMR",
"Zo38Ux5Ggz",
"Wmzw8bcGR",
microIoT.SERVERS.China
)
basic.pause(500)
basic.forever(function () {
    亮灯(0, 19000, 红色)
    亮灯(2, 12000, 绿色)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        microIoT.microIoT_setIndexColor(1, 0xffff00)
        basic.pause(500)
        microIoT.microIoT_setIndexColor(1, 0x000000)
        basic.pause(500)
    }
})
