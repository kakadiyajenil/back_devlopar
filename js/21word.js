function countWordLengths() {
    var text = document.getElementById('textInput').value;
    text = text.trim();
  
    if (text === '') {
      document.getElementById('result').innerText = 'Please enter some text.';
      return;
    }
  
    var words = text.split(/\s+/);
  
    var resultString = words.map(function(word) {
      return `${word} (${word.length} characters)`;
    }).join(', ');
  
    document.getElementById('result').innerText = 'Word lengths: ' + resultString;
}