const raw = import.meta.env.BASE_URL;

export const BASE = raw.endsWith("/") ? raw : `${raw}/`;

export const asset = (path: string): string =>
  `${BASE}${path.replace(/^\/+/, "")}`;

export const absolute = (path: string): string =>
  new URL(asset(path), import.meta.env.SITE).href;
