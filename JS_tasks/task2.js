function first_non_repeating_letter(inputString) {
    let loweredInput = inputString.toLowerCase();
    for (let i = 0; i < loweredInput.length; i++)
    {
        repeats = false;
        for (let j = i+1; j < loweredInput.length; j++) {
            if (loweredInput[i] === loweredInput[j]) {
                repeats = true;
                break;
            }
        }

        if (repeats)
        {
            return inputString[i];
        }
    }
    return "";

}

console.log(first_non_repeating_letter("stress"));
console.log(first_non_repeating_letter("TretSS"));
console.log(first_non_repeating_letter("sTreSSret"));