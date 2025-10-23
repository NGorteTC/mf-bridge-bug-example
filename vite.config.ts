import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { NativeFederationTypeScriptRemote } from "@module-federation/native-federation-typescript/vite";
import type { ModuleFederationOptions } from "@module-federation/vite/lib/utils/normalizeModuleFederationOptions";

const moduleFederationConfig: ModuleFederationOptions = {
  name: "remote",
  manifest: true,
  exposes: {
    "./widget": "./src/widget.tsx",
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation(moduleFederationConfig),
    NativeFederationTypeScriptRemote({ moduleFederationConfig }),
  ],
  base: "/app/remoteapp",
  server: {
    open: true,
    host: true,
    port: 11000,
    proxy: {
      "/@mf-types.zip": {
        target: "http://localhost:11000/app/remoteapp",
        changeOrigin: true,
        rewrite: () => `/@fs/${process.cwd()}/dist/@mf-types.zip`,
      },
    },
    fs: {
      allow: ["./dist"],
    },
  },
  build: {
    target: "chrome89",
    outDir: "dist",
    assetsDir: "static",
    manifest: true,
  },
});
