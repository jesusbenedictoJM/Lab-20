const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});


// Tarea 1: Pruebas para divide()
test('divide 6 / 3 to equal 2', () => {
    expect(calculator.divide(6, 3)).toBe(2);
});

test('divide -10 / 2 to equal -5', () => {
    expect(calculator.divide(-10, 2)).toBe(-5);
});

// Tarea 3: Prueba para dividir con 0 como divisor (debe lanzar error)
test('divide by zero should throw error', () => {
    expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
});

// Tarea 1: Pruebas para multiply()
test('multiply 4 * 5 to equal 20', () => {
    expect(calculator.multiply(4, 5)).toBe(20);
});

test('multiply -3 * 3 to equal -9', () => {
    expect(calculator.multiply(-3, 3)).toBe(-9);
});