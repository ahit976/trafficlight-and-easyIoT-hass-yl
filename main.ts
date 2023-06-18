microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (message) {
    if (message == "L") {
        microIoT.microIoT_showUserText(0, "Receved L")
    }
})
input.onButtonPressed(Button.A, function () {
    microIoT.microIoT_SendMessage("close-curtain", microIoT.TOPIC.topic_0)
    microIoT.microIoT_showUserText(1, "")
    microIoT.microIoT_showUserText(1, "curtain closed")
})
input.onButtonPressed(Button.B, function () {
    microIoT.microIoT_SendMessage("open-curtain", microIoT.TOPIC.topic_0)
    microIoT.microIoT_showUserText(1, "")
    microIoT.microIoT_showUserText(1, "curtain closed")
})
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
