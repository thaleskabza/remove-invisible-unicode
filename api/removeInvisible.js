export default function removeInvisible(text) {
  const invisibleChars = /[\u0000\u0009\u000A\u000B\u000C\u000D\u00A0\u034F\u061C\u115F\u1160\u1680\u180E\u2000-\u200F\u2028-\u202F\u205F\u2060-\u206F\u2800\uFEFF]/g;

  // Find and collect all invisible characters
  const found = [...text.matchAll(invisibleChars)].map(match => match[0]);
  const unique = [...new Set(found)];

  const cleanedText = text.replace(invisibleChars, ' ');

  return {
    cleanedText,
    invisibleCharacters: unique.map(c => ({
      char: c,
      code: `\\u${c.charCodeAt(0).toString(16).padStart(4, '0')}`
    }))
  };
}
