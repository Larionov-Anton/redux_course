import './App.css';
import Likes from './likes';
import Tittle from './Title';



function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
				<Tittle />
				<Likes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
