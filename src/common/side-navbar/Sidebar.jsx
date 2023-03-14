import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
//import LineChartIcon from "@mui/icons-material/LineChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import { Link } from "react-router-dom";
// import Registeration from "./account/register/Registeration";


const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <List>
        <ListItem button component={Link} to="/" onClick={onClose}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/barchart" onClick={onClose}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Bar Chart" />
        </ListItem>
        <ListItem button component={Link} to="/linechart" onClick={onClose}>
          <ListItemIcon>
            {/* <LineChartIcon /> */}
          </ListItemIcon>
          <ListItemText primary="Line Chart" />
        </ListItem>
        <ListItem button component={Link} to="/piechart" onClick={onClose}>
          <ListItemIcon>
            <PieChartIcon />
          </ListItemIcon>
          <ListItemText primary="Pie Chart" />
        </ListItem>

        <ListItem button component={Link} to="/ProductList" onClick={onClose}>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Product List" />
        </ListItem>
        <ListItem button component={Link} to="/Post" onClick={onClose}>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Post" />
        </ListItem>
        <ListItem button component={Link} to="/UserList" onClick={onClose}>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Users Listing " />
        </ListItem>
        <ListItem button component={Link} to="/TodoApp" onClick={onClose}>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Todo" />
        </ListItem>
        


        <ListItem button component={Link} to="/login" onClick={onClose}>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={Link} to="/Registeration" onClick={onClose}>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Registeration" />
        </ListItem>
        <ListItem button component={Link} to="/Setpassword" onClick={onClose}>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Set Password" />
        </ListItem>
       



      </List>
    </Drawer>
  );
};

export default Sidebar;
