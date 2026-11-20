import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '@/keystatic/config';

export const { GET, POST } = process.env.NODE_ENV === 'production'
  ? { GET: unavailable, POST: unavailable }
  : makeRouteHandler({ config });

function unavailable() {
  return new Response(null, { status: 404 });
}
