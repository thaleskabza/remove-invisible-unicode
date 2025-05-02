async function cleanText() {
    const inputText = document.getElementById("inputText").value;
  
    const response = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: inputText }),
    });
  
    if (!response.ok) {
      const error = await response.json();
      alert('Error: ' + error.error);
      return;
    }
  
    const result = await response.json();
    const cleaned = result.cleanedText;
  
    // Output cleaned result
    document.getElementById("outputText").value = cleaned;
  
    // Debug: Unicode values
    const debug = document.getElementById("debugOutput");
    debug.textContent = escapeUnicode(cleaned);
  
    // Debug: List invisible Unicode characters
    const list = document.getElementById("invisibleList");
    list.innerHTML = '';
  
    if (result.invisibleCharacters.length === 0) {
      list.innerHTML = '<li>No invisible Unicode characters found.</li>';
    } else {
      result.invisibleCharacters.forEach(char => {
        const li = document.createElement("li");
        li.textContent = `${char.code} (${char.char === ' ' ? 'space' : 'invisible'})`;
        list.appendChild(li);
      });
    }
  }
  
  function escapeUnicode(str) {
    return [...str].map(char => {
      const code = char.charCodeAt(0);
      return code < 32 || code > 126
        ? `\\u${code.toString(16).padStart(4, '0')}`
        : char;
    }).join('');
  }
  
  function injectTestString() {
    const testStr = `Hello​there friend‍how are you doing today with so many strange symbols hidden‌in‍this tiny little sentence filled with secrets and⁠some⁠more⁡Unicode⁢tricks⁤using⁦zero-width⁧space⁨characters⁩from⁪many⁫scripts⁬and⁭layout⁮rules⁯in⁰Unicode.
`;
    document.getElementById("inputText").value = testStr;
  }
  