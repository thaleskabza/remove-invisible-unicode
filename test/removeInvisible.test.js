import { expect } from 'chai';
import removeInvisible from '../api/removeInvisible.js';

describe('removeInvisible', () => {
  it('should remove zero-width characters', () => {
    const input = 'This sentence has invisible‌Unicode​characters​inside.'; // real Unicode
    const expected = 'This sentence has invisible Unicode characters inside.';
    const result = removeInvisible(input);
    expect(result.cleanedText).to.equal(expected);
  });

  it('should remove multiple invisible characters', () => {
    const input = '\u200B\u200C\u200D\u2060\uFEFFTest\u200B';
    const expected = '     Test ';
    const result = removeInvisible(input);
    expect(result.cleanedText).to.equal(expected);
  });

  it('should return the same string if no invisible characters are present', () => {
    const input = 'Visible text only';
    const result = removeInvisible(input);
    expect(result.cleanedText).to.equal(input);
  });

  it('should handle empty strings', () => {
    const result = removeInvisible('');
    expect(result.cleanedText).to.equal('');
  });
});
