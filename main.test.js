const add = require('./main');


test('should return 0 for an empty string', () => {
    // Arrange
    const input = '';

    // Act
    const result = add(input);

    // Assert
    expect(result).toBe(0);
});

test('should return the number for a single number string', () => {
    // Arrange
    const input = '5';

    // Act
    const result = add(input);

    // Assert
    expect(result).toBe(5);
});

test('should return the sum of two comma-separated numbers', () => {
    // Arrange
    const input = '1,2';

    // Act
    const result = add(input);

    // Assert
    expect(result).toBe(3);
});

test('should return the sum of an unknown amount of comma-separated numbers', () => {
    // Arrange
    const input = '1,2,3,4,5';

    // Act
    const result = add(input);

    // Assert
    expect(result).toBe(15);
});

test('should throw an error for single negative number', () => {
    // Arrange
    const input = '-1';

    // Act and Assert
    expect(() => add(input)).toThrow('Negatives not allowed. Negative number found: -1.');
});

test('should throw an error for negative numbers', () => {
    // Arrange
    const input = '1,-2,3,-4';

    // Act and Assert
    expect(() => add(input)).toThrow('Negatives not allowed. Negative numbers found: -2, -4.');
});
