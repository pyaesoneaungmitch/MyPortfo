const ABSOLUTE_URL_PATTERN = /^(?:[a-z][a-z\d+\-.]*:|\/\/|#)/i;

export function withBasePath(path: string | null | undefined) {
  if (!path || ABSOLUTE_URL_PATTERN.test(path)) {
    return path ?? null;
  }

  const basePath = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const normalizedPath = path.replace(/^\/+/, "");

  return `${basePath}${normalizedPath}`;
}
