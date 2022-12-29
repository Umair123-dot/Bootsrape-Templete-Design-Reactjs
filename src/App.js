import "./assets/scss/base.scss";
import { Home } from "./pages/Home/index";
import {About} from "./pages/About/index";
import {Course} from './pages/Course/index'
import {CourseDetail} from './pages/CourseDetail/index';
import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';


import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Header />
       
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/course" element={<Course />} />
          <Route  path="/coursedetail" element={<CourseDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
