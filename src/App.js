import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import BarChart from "./barchart";
import LineChart from "./linechart";
import PieChart from "./piechart";
import Registeration from "./Registeration.js";
import Setpassword from "./Setpassword";
import ProductList from "./ProductList";
import Login from "./login";
import Post from "./Post";
import Userlist from "./UserList";

import Todo from "./Todo";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <BrowserRouter>
      <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />
      <div>
        <button onClick={handleSidebarOpen}>Open Sidebar</button>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/barchart" element={<BarChart />} />
          <Route path="/linechart" element={<LineChart />} />
          <Route path="/piechart" element={<PieChart />} />
          <Route exact path="/registeration" element={<Registeration />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/ProductList" element={<ProductList />} />
          <Route exact path="/setpassword" element={<Setpassword />} />
          <Route exact path="/post" element={<Post />} />
          <Route exact path="/userlist" element={<Userlist />} />
          <Route exact path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
