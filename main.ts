serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    incomingData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    basic.showString(incomingData)
})
let incomingData = ""
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
serial.redirectToUSB()
basic.forever(function () {
    serial.writeNumber(input.temperature())
    serial.writeLine(" ")
    basic.showString("..")
    basic.pause(5000)
})
