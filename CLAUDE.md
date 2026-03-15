# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Enconvo extension that provides variable extractors — lightweight handlers that expose system context (active application, clipboard, browser tabs, screenshots, etc.) to the Enconvo app via its native API bridge.

## Commands

```bash
npm run build        # Production build (uses `enconvo` CLI)
npm run dev          # Development mode with watch
npm run lint         # ESLint on src/
npm run lint:fix     # ESLint with auto-fix
npm run format       # Prettier format all .ts files
npm run format:check # Check formatting without writing
```

## Architecture

Each variable command is a standalone TypeScript file in `src/` exporting a single `default async function main()`. Commands are registered in `package.json` under the `commands` array with `"commandType": "variable"`.

Two API patterns are used to interact with the native Enconvo layer:
- **Direct API import**: `import { getFrontmostApplication } from "@enconvo/api"` — for functions available as direct exports
- **Native command bridge**: `NativeAPI.callCommand('context_module|command_name')` — for most operations (clipboard, screenshots, browser, finder)

All handlers return `Response.json(data)`.

### Native Context Modules

- `clipboard_context|get_clipboard_text`
- `screenshot_context|current_screen_screenshot` / `frontmost_application_screenshot`
- `application_context|frontmost_application_content`
- `browser_context|get_browser_current_tab_url`
- `finder_context|get_finder_current_directory_url` / `get_finder_selected_items`

## Key Dependency

`@enconvo/api` is linked locally from `/Users/ysnows/Documents/Project/enconvo.nodejs/enconvo_api`. This provides `NativeAPI`, `getFrontmostApplication()`, and types like `ScreenshotContextItem`, `FileContextItem`.
