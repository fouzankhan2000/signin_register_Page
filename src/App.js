import { Route, Routes } from "react-router-dom";
import './App.css';
import SigninPage from "./Pages/SigninPage";
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
