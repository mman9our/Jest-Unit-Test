function add(numbers) {
    if (!numbers) {
        return 0;
    }

    const nums = numbers.split(',');
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        const parsedNum = parseInt(nums[i], 10);

        if (isNaN(parsedNum)) {
            throw new Error('Invalid input. Only numbers allowed.');
        }

        sum += parsedNum;
    }



    return sum;
}

module.exports = add;
