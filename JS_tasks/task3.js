function digitalRoot(number) {
    while (true)
    {
        let digits = Array.from(String(number), Number);
        let digitsSum = digits.reduce((sum, digit) => sum + digit, 0);
        if (digitsSum > 9)
        {
            number = digitsSum;
            continue;
        }

        return digitsSum;
        break;
    }
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));