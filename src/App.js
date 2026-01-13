<<<<<<< Updated upstream
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyFunction from "./Components/MyFunction";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import ClassComponentEx from "./Components/ClassComponentEx";
import FunctionComponentEx from "./Components/FunctionComponentEx";
import PrviosCount from "./Components/PrviosCount";
import EventHandlers from "./Components/EventHandlers";
import Form1 from "./Components/Form1";
import ParentComponent from "./Components/ParentComponent";
import Greet from "./Components/Greet";
import Timer from "./Components/Timer";
import UserData from "./Components/UserData";
import AxiosExample from "./Components/AxiosExample";
import Dileep from "./Components/Dileep";
import AdvancedFormDataValidation from "./Components/AdvancedFormDataValidation";
import BasicFormDataExample from "./Components/BasicFormDataExample";
=======
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MyFunction from './Components/MyFunction';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import ClassComponentEx from './Components/ClassComponentEx';
import FunctionComponentEx from './Components/FunctionComponentEx';
import PrviosCount from './Components/PrviosCount';
import EventHandlers from './Components/EventHandlers';
import Form1 from './Components/Form1';
import ParentComponent from './Components/ParentComponent';
import Greet from './Components/Greet';
import Timer from './Components/Timer';
import UserData from './Components/UserData';
import AxiosExample from './Components/AxiosExample';
import { Component } from 'react';

>>>>>>> Stashed changes

function App() {
  return (
    // <Router>
    //   <div className="App" >
    //     <nav className='navBar'>
    //       <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    //       <Link to='/about'>About Us</Link>&nbsp;&nbsp;&nbsp;
    //       <Link to='/Contact'>Contact Us</Link>&nbsp;&nbsp;&nbsp;
    //       <Link to='/blog'>Blog</Link>&nbsp;&nbsp;&nbsp;
    //       <Link to='/MyFun'>My Fun</Link>

    //     </nav>
    //     <>
    //       <Routes>

    //         <Route path="/" element={<Home />} />
    //         <Route path="/about" element={<AboutUs />} />
    //         <Route path="/blog" element={<Blog />} />
    //         <Route path="/Contact" element={<Contact />} />
    //         <Route path="/MyFun" element={<MyFunction />} />

    //       </Routes>

    //     </>
    //   </div>
    // </Router>
    <>
      {/* <ClassComponentEx/>
     <FunctionComponentEx/> */}
      {/* <PrviosCount/> */}
      {/* <EventHandlers/> */}
      {/* <Form1/> */}
      {/* <Greet name="Jon"/>
     <Greet name="Tom"/>
     <Greet name="Stanly"/> */}
      {/* <ParentComponent/> */}

      {/* <FunctionComponentEx/> */}

      {/* <Timer/> */}
      {/* <UserData userId={2}/> */}
      {/* <Dileep />
      <AxiosExample /> */}
      {/* <AdvancedFormDataValidation/> */}
      <BasicFormDataExample/>
    </>
  );
}

export default App;
