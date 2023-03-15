import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./common/side-navbar/Sidebar";
import Dashboard from "./features/dashboard/Dashboard";
import BarChart from "./features/dashboard/barchart";
import LineChart from "./features/dashboard/linechart";
import PieChart from "./features/dashboard/piechart";
import Registeration from "./account/register/Registeration.js";
import Setpassword from "./account/forgot-password/Setpassword";
import ProductList from "./features/products/ProductList";
import Login from "./account/login/login";
import Post from "./features/posts/Post";
import Userlist from "./features/users/UserList";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './features/todo/store';
import TodoApp from './features/todo/TodoApp';


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
          <Route exact path="/todo" element={<TodoApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

  // ReactDOM.render(
  //   <Provider store={store}>
  //     <TodoApp />
  //   </Provider>,
  //   document.getElementById('root'));

};

export default App;
