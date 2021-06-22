import { massConversions } from "../utils/unitConversions";

test('massConversions from kilograms', () => {
    let num = 1;
    let from = "kg";
    let to = "lb";
    expect(massConversions(from, to, num)).toBe(2.20462);
    to = "stone";
    expect(massConversions(from, to, num)).toBe(0.157473);
    to = "ton";
    expect(massConversions(from, to, num)).toBe(0.00110231);
});

test('massConversions from pounds', () => {
    let num = 1;
    let from = "lb";
    let to = "kg";
    expect(massConversions(from, to, num)).toBeCloseTo(0.453592);
    to = "stone";
    expect(massConversions(from, to, num)).toBeCloseTo(0.0715289);
    to = "ton";
    expect(massConversions(from, to, num)).toBe(0.0005);
});

test('massConversions from stone', () => {
    let num = 1;
    let from = "stone";
    let to = "lb";
    expect(massConversions(from, to, num)).toBe(14);
    to = "kg";
    expect(massConversions(from, to, num)).toBe(6.35029);
    to = "ton";
    expect(massConversions(from, to, num)).toBeCloseTo(0.006993);
});

test('massConversions from US ton', () => {
    let num = 1;
    let from = "ton";
    let to = "lb";
    expect(massConversions(from, to, num)).toBe(2000);
    to = "stone";
    expect(massConversions(from, to, num)).toBe(142.857);
    to = "kg";
    expect(massConversions(from, to, num)).toBe(907.185);
});