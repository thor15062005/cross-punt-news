import { makeRouteHandler } from '@keystatic/next/route-handler';
import { isKeystaticAvailable } from '@/keystatic/availability';
import config from '@/keystatic/config';

export const { GET, POST } = isKeystaticAvailable()
  ? makeRouteHandler({ config })
  : { GET: unavailable, POST: unavailable };

function unavailable() {
  return new Response(null, { status: 404 });
}
