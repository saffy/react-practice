import {
  type RouteConfig,
  route,
  layout,
  index
} from "@react-router/dev/routes";

export default [
  // * matches all URLs, the ? makes it optional so it will match / as well
  layout("./components/Layout.tsx", [
    index("./components/Home.tsx"),
    route("*?", "./components/NotFound.tsx"),
  ]),
] satisfies RouteConfig;