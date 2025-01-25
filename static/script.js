function countWords() {
    const text = document.getElementById('inputText').value.trim();
    if (text === '') {
        document.getElementById('result').innerText = "Please enter some text.";
        return;
    }
    fetch('/count', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = `Word Count: ${data.wordCount}`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerText = "An error occurred.";
        });
}
