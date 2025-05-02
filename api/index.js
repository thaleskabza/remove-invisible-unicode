import removeInvisible from './removeInvisible.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    if (typeof text !== 'string') {
      return res.status(400).json({ error: 'Invalid input: text must be a string.' });
    }

    const { cleanedText, invisibleCharacters } = removeInvisible(text);

    res.status(200).json({
      cleanedText,
      invisibleCharacters
    });
  } else {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }
}
