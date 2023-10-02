import './App.css';
import LoginForm from './Components/LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupForm from './Components/SignupForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path="/signup" element={<SignupForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
