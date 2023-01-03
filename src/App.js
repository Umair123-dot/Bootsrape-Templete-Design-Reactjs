import React,{useState,useEffect} from "react";
import "./assets/scss/base.scss";
import { Home } from "./pages/Home/index";
import {About} from "./pages/About/index";
import {Course} from './pages/Course/index'
import {CourseDetail} from './pages/CourseDetail/index';
import Topbar from './components/Topbar/Topbar';
import Header from './common/Header';

//Helper Routes
import {APP_ROUTES} from './helper/routesHelper';


import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Footer from "./common/Footer/Footer";
import { Loader } from "./components/Loader";




function App() {
  const [loading, setLoading] = useState(true)
   useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <>
    {
      loading===false ? (<div className="App">

      <Router>
        <Topbar />
        <Header />
       
        <Routes>
          <Route exact path={APP_ROUTES.HOME} element={<Home />} />
          <Route  path={APP_ROUTES.ABOUT} element={<About />} />
          <Route  path={APP_ROUTES.COURSE} element={<Course />} />
          <Route  path={APP_ROUTES.COURSEDETAIL} element={<CourseDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>):(<Loader classes="overlay-loading-container" />)
    }
    </>
    
  );
}

export default App;
