import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

import { Link } from "react-router-dom";
export const mainListItems = (
  <div>
    <Link to="/general-information">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Genel Bilgiler" />
      </ListItem>
    </Link>
    <Link to="/personnel" style={{}}>
      <ListItem button>
        <ListItemIcon>
          <PeopleAlt />
        </ListItemIcon>
        <ListItemText primary="Çalışanlar" />
      </ListItem>
    </Link>

    <Link to="/services">
      <ListItem button>
        <ListItemIcon>
          <FormatListBulletedIcon />
        </ListItemIcon>
        <ListItemText primary="Hizmetler" />
      </ListItem>
    </Link>
    <Link to="/durations">
      <ListItem button>
        <ListItemIcon>
          <QueryBuilderIcon />
        </ListItemIcon>
        <ListItemText primary="Servis Süreleri" />
      </ListItem>
    </Link>

    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
