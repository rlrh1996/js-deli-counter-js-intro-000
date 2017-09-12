var position = 0;

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    position++;
    return position + 1;
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
        return "There is nobody waiting to be served!";
    } else {
        return katzDeliLine.shift()
    }
}
