import { sayMsg } from '@/index';

describe('test', () => {
  it('test', () => {
    const input = 'test';
    expect(sayMsg(input)).toBe(input);
  });
});
