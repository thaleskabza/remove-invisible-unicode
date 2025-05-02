import { expect } from 'chai';
import removeInvisible from '../api/removeInvisible.js';

describe('removeInvisible', () => {
  it('should remove zero-width characters', () => {
    const input = 'Hello\u200BWorld';
    const expected = 'HelloWorld';
    expect(removeInvisible(input)).to.equal(expected);
  });

  it('should remove multiple invisible characters', () => {
    const input = '\u200B\u200C\u200D\u2060\uFEFFTest\u200B';
    const expected = 'Test';
    expect(removeInvisible(input)).to.equal(expected);
  });

  it('should return the same string if no invisible characters are present', () => {
    const input = 'Visible text only';
    expect(removeInvisible(input)).to.equal(input);
  });

  it('should handle empty strings', () => {
    expect(removeInvisible('')).to.equal('');
  });
});
