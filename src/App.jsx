import './App.css'
import Nav from "./components/Nav"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Summarize from './pages/Summarize';
import Generator from './pages/Generator';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path='summarize' element={<Summarize />} />
            <Route path='generate' element={<Generator/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
