import { BrowserRouter, Routes, Route } from "react-router-dom";
// 页面组件
import Layout from "../src/pages/layout/layout.js";
import Login from "../src/pages/login/login.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> }/>
        <Route path="/Layout" element={ <Layout /> }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
