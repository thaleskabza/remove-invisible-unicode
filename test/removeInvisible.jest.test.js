import axios from 'axios';

const BASE_URL = 'https://remove-invisible-unicode.vercel.app/' || 'http://localhost:3000';

describe('POST /api', () => {
  test('should clean invisible characters via API', async () => {
    const response = await axios.post(`${BASE_URL}/api`, {
      text: 'Hi\u200Bthere'
    });

    expect(response.status).toBe(200);
    expect(response.data.cleanedText).toBe('Hithere');
  });

  test('should handle clean input', async () => {
    const response = await axios.post(`${BASE_URL}/api`, {
      text: 'Hello world'
    });

    expect(response.status).toBe(200);
    expect(response.data.cleanedText).toBe('Hello world');
  });

  test('should return 400 on non-string input', async () => {
    try {
      await axios.post(`${BASE_URL}/api`, { text: 123 });
    } catch (err) {
      expect(err.response.status).toBe(400);
      expect(err.response.data.error).toBe('Invalid input: text must be a string.');
    }
  });
});
