import { LinkType } from "../types/Links";
import {
  faColumns,
  faPenToSquare,
  faClipboardList,
  faBoxOpen,
  faCashRegister,
  faUsers,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Menus: LinkType[] = [
  {
    id: 5,
    title: "Dashboard",
    icon: faColumns,
    component: null,
    nestedLink: null,
    path: "/",
  },
  {
    id: 6,
    title: "Register",
    icon: faPenToSquare,
    component: null,
    nestedLink: null,
    path: "/dashboard/new-machine",
  },
  {
    id: 1,
    title: "Available Machines",
    icon: faClipboardList,
    component: null,
    path: "/dashboard/machines",
    nestedLink: null,
  },
  {
    id: 2,
    title: "Container's Info",
    icon: faBoxOpen,
    component: null,
    path: "/dashboard/containers",
    nestedLink: [
      {
        title: "Kigali",
        path: "/dashboard/about",
      },
      {
        title: "Muhanga",
        path: "/dashboard/contact",
      },
      {
        title: "Nyagatare",
        path: "/dashboard/contact",
      },
      {
        title: "Muhanga",
        path: "/dashboard/contact",
      },
      {
        title: "Rubavu",
        path: "/dashboard/about",
      },
    ],
  },
  {
    id: 3,
    title: "Rewards Info",
    icon: faCashRegister,
    component: null,
    nestedLink: null,
    path: "/dashboard/rewards",
  },
  {
    id: 4,
    title: "Contributors",
    icon: faUsers,
    component: null,
    nestedLink: null,
    path: "/dashboard/contributors",
  },
  {
    id: 5,
    title: "Operators",
    icon: faUser,
    component: null,
    nestedLink: null,
    path: "/dashboard/operators",
  },
];

export default Menus;
