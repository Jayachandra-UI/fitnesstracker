import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstScreen from './ui-Pages/firstScreen';
import AddScreen from './ui-Pages/secondScreen';
import TestScren from './ui-Pages/testScreen';
import LoginScreen from './ui-Pages/login';
import TableScreen from './ui-Pages/table';
import RegisterScreen from './ui-Pages/registerScreen';
import ActivityScreen from './ui-Pages/activityScreen';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs" element={<TestScren />} />
        <Route path="/:id/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/table" element={<TableScreen />} />
        <Route path="/activity_status" element={<ActivityScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
