import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    nxViteTsPaths(),
  ],
});
