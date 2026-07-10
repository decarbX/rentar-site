export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const hostname = url.hostname;

    // Inter-domain redirect: all .com → rentar.net (with path + query preservation)
    if (hostname === 'rentar.com' || hostname === 'www.rentar.com') {
      return Response.redirect('https://rentar.net' + url.pathname + url.search, 301);
    }

    // www.rentar.net → rentar.net apex
    if (hostname === 'www.rentar.net') {
      return Response.redirect('https://rentar.net' + url.pathname + url.search, 301);
    }

    return env.ASSETS.fetch(request);
  }
};
