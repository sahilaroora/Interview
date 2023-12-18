import "./App.css";
import AddUser from "./Componets/AddUser";
import AllUser from "./Componets/AllUser";
import Codeforinterview from "./Componets/Codeforinterview";
import EditUser from "./Componets/EditUser";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Codeforinterview />}/>
           <Route path="/all" element={<AllUser/>}/>
           <Route path="/add" element={<AddUser/>}/>
           <Route path="/edit/:id" element={<EditUser/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
