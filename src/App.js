import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs'; 
import Home from './Pages/Home/Home';
import Projectdetail from './Pages/Home/Projectdetail';
import Navbar from './Pages/Share/Navbar';

function App() {
  return (
    <div> 
      <Navbar></Navbar> 
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/projects/:projectdetail" element={<Projectdetail></Projectdetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
