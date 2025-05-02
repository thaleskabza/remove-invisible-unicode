# 🕵️ Invisible Unicode Cleaner

This project provides an API and frontend web application that detects and removes **invisible Unicode characters** (such as zero-width spaces, formatting marks, etc.) commonly used in watermarking, obfuscation, or hidden tracking.

---

## 🛠 Features

- 🧼 **API Endpoint** that removes known invisible Unicode characters
- 💡 **Frontend UI** for pasting, cleaning, and viewing text
- 🧪 **Automated tests** for character removal using Mocha and Chai
- 📜 **Swagger documentation** of the API
- 🚀 **Deployed to Vercel** for easy access and use

---

## 🧬 Supported Invisible Unicode Characters

The app removes the following invisible or formatting Unicode ranges:

- `\u0000`, `\u0009`–`\u000D`
- `\u00A0`, `\u034F`, `\u061C`, `\u115F`–`\u1160`
- `\u1680`, `\u180E`, `\u2000`–`\u200F`
- `\u2028`–`\u202F`, `\u205F`
- `\u2060`–`\u206F`, `\u2800`, `\uFEFF`

---

## 📁 Project Structure

