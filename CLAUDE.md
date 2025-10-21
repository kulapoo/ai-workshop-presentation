# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite application. It's a standard Vite-based React project with Hot Module Replacement (HMR) and ESLint configured for TypeScript and React development.

## Package Manager

This project uses **pnpm**. Always use `pnpm` commands, not `npm` or `yarn`.

## Development Commands

- **Start dev server**: `pnpm dev`
- **Build for production**: `pnpm build` (runs TypeScript compiler first, then Vite build)
- **Lint code**: `pnpm lint`
- **Preview production build**: `pnpm preview`

## Architecture

### Build System
- **Vite** is the build tool with the `@vitejs/plugin-react` plugin (uses Babel for Fast Refresh)
- TypeScript project references are configured via `tsconfig.json` with separate configs for app code (`tsconfig.app.json`) and build tooling (`tsconfig.node.json`)

### Entry Points
- `src/main.tsx` - Application entry point that renders the root `App` component
- `src/App.tsx` - Main application component
- `index.html` - HTML entry point that loads the app via `src/main.tsx`

### Code Style & Linting
- ESLint is configured with TypeScript support, React Hooks rules, and React Refresh plugin
- Config uses the new flat config format (`eslint.config.js`)
- Ignores `dist` directory

## TypeScript Configuration

The project uses TypeScript project references:
- `tsconfig.json` - Root config that references other configs
- `tsconfig.app.json` - Application code configuration
- `tsconfig.node.json` - Build tooling configuration (for vite.config.ts, etc.)
