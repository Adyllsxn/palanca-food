import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Landing page (raiz)
  index("routes/_index.tsx"),
  
  // Rotas de autenticação
  route("auth/signin", "routes/auth/signin.tsx"),
  route("auth/signup", "routes/auth/signup.tsx"),
  route("auth/recover", "routes/auth/recover.tsx"),
  
  // Dashboard (protegido)
  route("dashboard", "routes/dashboard.tsx"),
] satisfies RouteConfig;