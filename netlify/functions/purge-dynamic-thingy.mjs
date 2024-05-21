import { purgeCache } from '@netlify/functions';

const handler = async () => {
  await purgeCache({
    tags: ['dynamicThingy'],
  });
  return new Response(JSON.stringify({}));
};

export default handler;
