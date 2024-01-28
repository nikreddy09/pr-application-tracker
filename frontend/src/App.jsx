/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Applications from './components/Applications/Applications';
import SignUp from './components/SignUp/SignUp';
import Login from './components/LogIn/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Applications} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
