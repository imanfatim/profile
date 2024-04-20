import logo from './logo.svg';
import './App.css';

import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about';
import Experience from './pages/experience';
import Projects from './pages/Pro';
import Navbar from './component/NavB';
import Botnet from './component/Botnet';
import Skills from './pages/skills';

function App() {
  return (
<BrowserRouter>
<Navbar/>

<Botnet/>
<Routes>

<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path="/experience" element={<Experience />} />
 <Route path="/projects" element={<Projects />} />
 <Route path="/skills" element={<Skills />} />
</Routes>
</BrowserRouter>
  );
}


export default App;
