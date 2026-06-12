import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

export function read(path) {
  return readFileSync(resolve(path), "utf8");
}

export function requireFile(path) {
  if (!existsSync(resolve(path))) {
    fail(`Missing required file: ${path}`);
  }
  return read(path);
}

export function rejectMarker(path, marker) {
  const body = requireFile(path);
  if (body.includes(marker)) {
    fail(`${path} contains deliberate failure marker ${marker}`);
  }
  return body;
}

export function requireText(path, text) {
  const body = requireFile(path);
  if (!body.includes(text)) {
    fail(`${path} must contain: ${text}`);
  }
  return body;
}

export function fail(message) {
  console.error(message);
  process.exit(1);
}

export function pass(message) {
  console.log(message);
}

