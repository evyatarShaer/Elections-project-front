// import Login from './components/auth/Login';
import { Routes, Route } from "react-router-dom";
import CandidatesList from "./components/candidate/Candidates";
import './App.css'

function App() {

  return (
    <>
      {/* <Login/> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/candidates" element={<CandidatesList />} />
        {/* <Route path="/elections" element={<Elections />} /> */}
      </Routes>
    </>
  )
}

export default App
