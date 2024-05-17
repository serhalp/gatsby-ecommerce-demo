const handler = async () => {
  return new Response('Hello, user Functions work');
};

export default handler;

export const config = {
  path: '/hello-user',
};
