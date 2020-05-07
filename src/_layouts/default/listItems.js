import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import { Link } from "react-router-dom";

const LinkContainer = ({ icon, path, title }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState();
  useEffect(() => {
    setActive(pathname.includes(path) > 0);
  });
  return (
    <Link
      to={path}
      style={{
        color: "black",
      }}
    >
      <ListItem
        button
        style={
          {
            //  background: `${active && "#f5f5f5"}`,
          }
        }
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </Link>
  );
};
export const mainListItems = (
  <div>
    <LinkContainer
      icon={<DashboardIcon color="primary" />}
      path="/general-information"
      title="Genel Bilgiler"
    />
    <LinkContainer
      icon={<PeopleAlt color="primary" />}
      path="/personnel"
      title="Çalışanlar"
    />
    <LinkContainer
      icon={<FormatListBulletedIcon color="primary" />}
      path="/services"
      title="Hizmetler"
    />

    <LinkContainer
      icon={<QueryBuilderIcon color="primary" />}
      path="/durations"
      title="Hizmet Süreleri"
    />
    <LinkContainer
      icon={<AttachMoneyIcon color="primary" />}
      path="/prices"
      title="Hizmet Fiyatları"
    />
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Randevuler Muhabbeti</ListSubheader>
    <LinkContainer
      icon={<AssignmentIcon color="primary" />}
      path="/calendar"
      title="Takvim"
    />
    <LinkContainer
      icon={<AssignmentIcon color="primary" />}
      path="/basic-calendar"
      title="BasicTakvim"
    />
    <LinkContainer
      icon={<AssignmentIcon color="primary" />}
      path="/resource-calendar"
      title="ResourceTakvim"
    />
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
