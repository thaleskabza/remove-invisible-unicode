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
    document.getElementById("outputText").value = result.cleanedText;
  }
  