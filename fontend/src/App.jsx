import { Link, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Layout from "./layout/Layout";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Home from "./component/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout><Home/></Layout>}/>
        <Route path={"/login"} element={<Layout><Login/></Layout>}/>
        <Route path={"/signup"} element={<Layout><SignUp/></Layout>}/>
      </Routes>
    </div>
  );
};

export default App;
