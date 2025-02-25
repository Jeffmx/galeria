import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Header from './Componentes/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/home'></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
