import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import Blog from "./Pages/Blog/Blog";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import NotFound from "./Pages/Shared/NotFound";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Shared/Footer';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';





function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
