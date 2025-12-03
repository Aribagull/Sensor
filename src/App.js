import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CustomerForm from "./Pages/CustomerForm";
import HomePage from "./Pages/home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/new-customer" element={<CustomerForm type="New Customer" />} />
        <Route path="/existing-customer" element={<CustomerForm type="Existing Customer" />} />
      </Routes>
    </Router>
  );
}

export default App;
