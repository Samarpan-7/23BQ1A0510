# Frontend Workspace (23BQ1A0510)

This repository contains the frontend application workspace. It is bootstrapped with [Vite](https://vitejs.dev/) and [React](https://react.dev/), providing a minimal, lightning-fast development environment with Hot Module Replacement (HMR) and standard ESLint rules.

## ⚡ React + Vite Setup

Currently, two official plugins are available for handling React within Vite:

* **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md):** Uses [Babel](https://babeljs.io/) for Fast Refresh.
* **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc):** Uses [SWC](https://swc.rs/) for Fast Refresh (a faster alternative written in Rust).

## ⚙️ React Compiler

The React Compiler is not enabled by default in this template due to its potential impact on development and build performances. If you wish to experiment with it or add it to your pipeline, please refer to the [official React Compiler documentation](https://react.dev/learn/react-compiler).

## 🛠️ Expanding the ESLint Configuration

If you are scaling this project into a production-ready application, it is highly recommended to use **TypeScript** with type-aware lint rules enabled. 

Check out the official Vite TS template for information on how to smoothly integrate `typescript` and `typescript-eslint` into this project architecture.

---
*Developed by Samarpan*
