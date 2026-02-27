import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./LandingPage";
import Signup from "./SignUp";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";
import GoalKeepers from "./GoalKeepers";
import Defenders from "./Defenders";
import DefensiveMidfielders from "./DefensiveMidfielders";
import OffensiveMidfielders from "./OffensiveMidfielders";
import Wingers from "./Wingers"
import Strikers from "./Strikers";
import BackgroundMusic from "./BackgroundMusic";  
import "./App.css";   

const App = () => {
  return (
    <div>
      <BackgroundMusic />
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/goalkeepers" element={<GoalKeepers />} />
          <Route path="/defenders" element={<Defenders />} />
          <Route path="/defensivemidfielders" element={<DefensiveMidfielders />} />
          <Route path="/offensivemidfielders" element={<OffensiveMidfielders />} />
          <Route path="/wingers" element={<Wingers />} /> 
          <Route path="/strikers" element={<Strikers />} /> 
       </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
