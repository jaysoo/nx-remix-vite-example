# Example of Nx + Remix + Vite

The `@nx/remix` plugin does not currently infer targets when using Remix + Vite. This repo is an example of setting it up manually until we update the plugin to add support.

See the `apps/my-remix-app/project.json` for how to set up targets using `command` (i.e. `run-commands`). We're also using `@nx/vite/plugins/nx-tsconfig-paths.plugin` to map workspace libraries.
