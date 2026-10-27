import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

const src = fileURLToPath(new URL('./src', import.meta.url));

// Абсолютные импорты от src (как в tsconfig baseUrl и webpack resolve.modules): 'engine', 'config/…' и т.д.
const alias = readdirSync(src, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map(({ name }) => ({ find: new RegExp(`^${name}(?=/|$)`), replacement: resolve(src, name) }));

export default defineConfig({
  resolve: { alias },
});
