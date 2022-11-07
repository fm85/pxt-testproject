loops.everyInterval(1000, function () {
    if (IoTCube.checkEvent(eRAK_EVT.JOINED)) {
        music.playTone(523, music.beat(BeatFraction.Eighth))
        basic.showIcon(IconNames.Yes)
    } else if (IoTCube.checkEvent(eRAK_EVT.JOIN_FAILED)) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        basic.showIcon(IconNames.SmallDiamond)
    }
})
loops.everyInterval(60000, function () {
    if (IoTCube.checkEvent(eRAK_EVT.JOINED)) {
        IoTCube.addAnalogInput(pins.analogReadPin(AnalogPin.P1), Channels.One)
        IoTCube.SendBuffer(IoTCube.getCayenne(), Channels.One)
    }
})
basic.forever(function () {
	
})
