var position = 0;

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    position++;
    return `Welcome, ${name}. You are number ${position + 1} in line.`;
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
        return "There is nobody waiting to be served!";
    } else {
        var person = katzDeliLine.shift();
        return `Currently serving ${person}.`;
    }
}
