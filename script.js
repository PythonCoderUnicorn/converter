

function encodeText() {
  const inputText = document.getElementById("inputText").value;
  const encodedText = btoa(inputText);
  document.getElementById("outputText").value = encodedText;
}

function decodeText() {
  const encodedText = document.getElementById("inputText").value;
  const decodedText = atob(encodedText);
  document.getElementById("outputText").value = decodedText;
}

function clearText() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
}