import './App.css';
import Comments from './Comments';
import Likes from './Likes';
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
			 <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
