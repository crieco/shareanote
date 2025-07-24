const BACKEND_URL = 'https://shareanote-mongo.onrender.com';

async function submitNote() {
  const noteText = document.getElementById('noteInput').value;
  const response = await fetch(`${BACKEND_URL}/note`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: noteText })
  });
  const result = await response.json();
  console.log('Submitted:', result);
  getNote();
}

async function getNote() {
  const response = await fetch(`${BACKEND_URL}/note`);
  const result = await response.json();
  document.getElementById('noteDisplay').innerText =
    result?.note?.content || 'No notes found.';
}

// Load the latest note on page load
window.onload = getNote;
