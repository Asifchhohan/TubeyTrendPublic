# AiVideoIdeaGenerator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Server-Side Rendering (SSR)

Angular Universal (SSR) has been added using the official schematic. Public pages (home, pricing, AI features, SEO pages) are server-rendered to improve SEO and initial load performance while dashboard/authenticated areas remain client-side.

Key notes:
- Browser-only APIs (window, document, localStorage, sessionStorage) are safely guarded with checks (e.g. `if (typeof window !== 'undefined') { ... }`).
- Title and Meta tags are set using Angular `Title` and `Meta` services in public components for SEO.

### Run SSR locally

- Build the app and server bundle:

  npm run build && npm run build:ssr

- Start the SSR server:

  npm run serve:ssr

The server listens on http://localhost:4000 by default.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
