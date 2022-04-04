import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import DashBoard from './Components/DashBoard/DashBoard';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import NavBar from './Components/NavBar/NavBar';
function App() {
  return (
    <div >
      <NavBar></NavBar>
          <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/review" element={<Review/>}></Route>
  <Route path="/dashboard" element={<DashBoard/>}></Route>
  <Route path="/blog" element={<Blog/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="*" element={<NotFound/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
