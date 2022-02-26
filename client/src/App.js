import MainLayout from "./layout/MainLayout";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className="App">
     <Routes>
       <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/settings" element={<Settings/>}></Route>
        <Route path="/write" element={<Write/>}></Route>
        <Route path="/post/:id" element={<Single/>}></Route>
       </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
