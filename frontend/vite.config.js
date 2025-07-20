import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/Mern-Stack-Final-Project-LiveWire/" // 👈 your GitHub repo name
});
