function add(numbers) {
    if (!numbers) {
        return 0;
    }

    const nums = numbers.split(',');
    let sum = 0;
    let negatives = [];

    for (let i = 0; i < nums.length; i++) {
        const parsedNum = parseInt(nums[i], 10);

        if (isNaN(parsedNum)) {
            throw new Error('Invalid input. Only numbers allowed.');
        }

        if (parsedNum < 0) {
            negatives.push(parsedNum);
        }

        sum += parsedNum;
    }

    if (negatives.length === 1) {
        throw new Error(`Negatives not allowed. Negative number found: ${negatives[0]}.`);
    }

    if (negatives.length > 1) {
        const negativesString = negatives.join(', ');
        throw new Error(`Negatives not allowed. Negative numbers found: ${negativesString}.`);
    }
    return sum;
}

module.exports = add;
