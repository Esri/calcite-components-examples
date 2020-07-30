# Calcite Components Examples

Working example applications utilizing [calcite-components](https://github.com/Esri/calcite-components). Each folder within this repository is its own mini application demonstrating integration of calcite components with other technologies and tooling.

Most frameworks provide a CLI tool to quickly start up a repo. If available, these tools are used to create the examples to ensure they are colloquial to the framework in question. After a starter project is scaffolded up, calcite-components are installed and some general steps are taken:

1. Include calcite components' loader and define the custom elements
2. Pull in calcite-components' global CSS file (provides theming variables, etc)
3. Ensure calcite-components' assets get copied into the project (allows the `calcite-icon` component to work)

This repository will change over time as new best-practices are established and framework integrations are improved.

## Angular

The [Angular example](./angular/) was built using the `@angular/cli` package:

```
npm install -g @angular/cli
ng new [NAME]
```

## Ember

The [ember app](./ember/) used the `ember-cli` package to get started:

```
npm install -g ember-cli
ember new [NAME]
```

## React

The [example react app](./react/) was created using the `create-react-app` utility:

```
npx create-react-app [NAME]
```

## Preact

The [example preact app](./preact-typescript/) was created using the `preact create` utility:

```
npm install -g preact-cli
preact create typescript [NAME]
```

This example also uses TypeScript, and provides additional instructions for getting calcite components to work inside a TypeScript + Preact environment.


## Vue

The [Vue.js example](./vue/) was built using the `cli-service-global` package:

```
npm install -g @vue/cli
vue create [NAME]
```

## Rollup

The [Rollup example](./rollup/) was generated with [rollup-starter-app](https://github.com/rollup/rollup-starter-app):

```
npx degit "rollup/rollup-starter-app" [NAME]
```
