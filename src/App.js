import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerForm from "./Pages/CustomerForm";
import HomePage from "./Pages/home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";


function App() {
  return (
    <Router>
  
    <Header/>

     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>

    <Footer/>
    </Router>
  );
}

export default App;
