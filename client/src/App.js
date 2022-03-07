import MainLayout from "./layout/MainLayout";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { useContext } from "react";
import {Context} from './context/Context';

function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter className="App">
     <Routes>
       <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/login" element={user ? <Home/> : <Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/settings" element={user ? <Settings/> : <Register/>}></Route>
        <Route path="/write" element={user ? <Write/> : <Register/>}></Route>
        <Route path="/posts/:id" element={<Single/>}></Route>
       </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
