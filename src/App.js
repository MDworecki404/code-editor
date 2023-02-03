import "./App.css";

function App() {
  function readFile() {
    const textArea = document.querySelector(".code");
    const input = document.querySelector(".files");
    if (!input || !input.files) {
      console.error("Nie znaleziono pliku do odczytania.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function () {
      console.log(reader.result);
      textArea.innerHTML = reader.result;
    };
    reader.readAsText(input.files[0]);
  }
  return (
    <div className="App">
      <div className="Files">
        <input onChange={readFile} type="file" className="files"></input>
      </div>
      <div className="Editor">
        <textarea className="code"></textarea>
      </div>
    </div>
  );
}

export default App;
