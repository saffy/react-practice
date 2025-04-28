import {
  type RouteConfig,
  route,
  layout,
  index
} from "@react-router/dev/routes";

export default [
  layout("./components/Layout.tsx", [
    index("./components/Home.tsx"),
    route("*?", "./components/NotFound.tsx"),
  ]),
] satisfies RouteConfig;