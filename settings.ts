export const api = (path: string) =>
  process.env.NODE_ENV === "production"
    ? `https://wherenext.vercel.app/api/${path}`
    : `https://narratory.eu.ngrok.io/api/${path}`;
