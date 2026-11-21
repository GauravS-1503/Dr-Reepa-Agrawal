import { copyFile, mkdir } from "node:fs/promises";

// Put the redesigned page at the public site root while retaining both versions.
await mkdir("dist/original", { recursive: true });
await copyFile("dist/index.html", "dist/original/index.html");
await copyFile("dist/revamped/index.html", "dist/index.html");
