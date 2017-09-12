var position = 0;

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    position++;
    return `Welcome, ${name}. You are number ${position + 1} in line.`;
}
