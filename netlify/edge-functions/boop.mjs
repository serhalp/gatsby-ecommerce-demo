const handler = async () => {
  return new Response('Boop, user Edge Functions work');
};

export default handler;

export const config = {
  path: '/boop-user',
};
