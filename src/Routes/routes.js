import { Home } from "../pages/home/home";
import { About } from "../pages/about/about";
import { Pages } from "../pages/pages/pages";
import { Shop } from "../pages/shop/shop";
import { Project } from "../pages/project/project";
import { News } from "../pages/news/news";
import { ShopSingle } from "../pages/shoppingSection/shoppingSection";
import { nanoid } from "nanoid";

export const routs = [
  {
    Component: Home,
    path: "/",
    id: nanoid(),
  },
  {
    Component: About,
    path: "/about",
    id: nanoid(),
  },
  {
    Component: Pages,
    path: "/pages",
    id: nanoid(),
  },
  {
    Component: Shop,
    path: "/shop",
    id: nanoid(),
  },
  {
    Component: Project,
    path: "/project",
    id: nanoid(),
  },
  {
    Component: News,
    path: "/news",
    id: nanoid(),
  },
  {
    Component: ShopSingle,
    path: "products/ShopSingle/:id",
    id: nanoid(),
  },
];