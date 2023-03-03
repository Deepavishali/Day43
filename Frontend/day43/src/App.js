import './App.css';
import SignUp from './components/SignUp.js';
import SignIn from './components/SignIn';
import { Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
      <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
        </div>
    

    </div>
  );
}

export default App;
