import { sum as add, minus } from '../src/calcuator'
test('1+1', () => {
    expect(add(1, 1)).toBe(2)
    expect(minus(1, 1)).toBe(0)
})