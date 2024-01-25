radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(無線グループ)
})
input.onButtonPressed(Button.A, function () {
    無線グループ = 0
    for (let 無線グループ = 0; 無線グループ <= 255; 無線グループ++) {
        radio.setGroup(無線グループ)
        continue;
    }
})
let 無線グループ = 0
radio.setGroup(0)
