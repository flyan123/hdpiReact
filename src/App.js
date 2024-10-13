import { BrowserRouter, Routes, Route } from "react-router-dom";
// 页面组件
import Layout from "../src/pages/layout/layout.js";
import Login from "../src/pages/login/login.js";
import Role from "./pages/Role/Role.js";

const App = () => {
  // 路由直接写这里
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> }/>
        <Route path="/Layout" element={ <Layout /> }>
          <Route path="role" element={ <Role /> }/>
        </Route> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
