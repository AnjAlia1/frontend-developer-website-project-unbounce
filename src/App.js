import logo from "./logo.svg";
// import "font-awesome/css/font-awesome.min.css";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Nav from "./nav";
import Main from "./main";
import Content from "./contentPage";
import Integrate from "./integrationPage";
import Feedback from "./FeedbackSection";
import Services from "./servicesPage";
import Support from "./supportPage";
import Trail from "./trialPage";
import Footer from "./footer";
import Login from "./login";
import { FaTwitterCircle } from "react-icons/fa";
import Newpage from "./newPage";

function App() {

  function HomeLayout() {
    return (
      <>
        <Nav />
        <Main></Main>
        <Content></Content>
        <Integrate />
        <Feedback></Feedback>
        <Services></Services>
        <Support></Support>
        <Trail />
        <Footer />
        
      </>
    );
  }
  return (
    <div className="App"> 
      <Routes>
         <Route path="/" element={<HomeLayout/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/newpage" element={<Newpage/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
