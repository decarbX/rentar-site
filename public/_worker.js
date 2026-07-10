export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const hostname = url.hostname;

    if (hostname === 'www.rentar.net' || hostname === 'www.rentar.com') {
      const apex = hostname.replace('www.', '');
      return Response.redirect('https://' + apex + url.pathname + url.search, 301);
    }

    return env.ASSETS.fetch(request);
  }
};
