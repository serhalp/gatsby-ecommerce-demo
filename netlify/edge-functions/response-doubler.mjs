export default async (_req, context) => {
  const response = await context.next();
  const text = await response.text();
  return new Response(`${text}${text}`, response);
};

export const config = {
  path: ['/hello-user', '/boop-user'],
  excludedPath: '/',
};
