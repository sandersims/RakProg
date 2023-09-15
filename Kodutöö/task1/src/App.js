import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          Sander Sims
        </p>
        <p>
          Mulle meeldib vabal ajal järgmiste asjadega tegeleda:
        </p>
        <ul>
          <li>Jõusaal</li>
          <li>Arvutimängud</li>
          <li>Autod</li>
          <li>Mootorrattad</li>
          <li>Netflix</li>
          <li>Loodus</li>
          <li>Reisimine</li>
          <li>Küpsetamine</li>
          <li>Jalgpall</li>
          <li>Vormel 1</li>
          <li>Kulturism</li>
          <li>Steroidid</li>
        </ul>
        <form>
          <label for="text-input1">Saatja:</label>
          <input type="text" id="text-input1" name="text-input" />
          <br></br>

          <label for="text-input2">Saaja:</label>
          <input type="text" id="text-input2" name="text-input" />
          <br></br>

          <label for="text-input3">Sõnum:</label>
          <textarea id="text-input" name="text-input" rows="5" cols="30"></textarea>
          <br></br>

          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
