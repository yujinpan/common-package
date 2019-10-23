import { sayMsg } from 'src';

describe('module test:', () => {
  it('input will be output', () => {
    const input = 'test';
    expect(sayMsg(input)).toBe(input);
  });
});
