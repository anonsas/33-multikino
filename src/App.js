import './App.scss';
import Create from './components/Create';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <Create />
        </div>
        <div className="col-7">Column</div>
      </div>
    </div>
  );
}

export default App;
