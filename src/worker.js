import templates from './svg_templates.json';
import { Resvg, initWasm } from '@resvg/resvg-wasm';
import resvgwasm from '@resvg/resvg-wasm/index_bg.wasm';

//initializing our svg converter
await initWasm(resvgwasm)

export default {
  async fetch(request, _env, _ctx) {
    if (request.method !== 'GET') {
      return new Response('Method not allowed', { status: 405 });
    }

    let url = new URL(request.url);

    console.log(templates)

    //rendering
    const resvg = new Resvg(templates.transitstatus, {
      font: {
        loadSystemFonts: false,
      },
    });

    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    console.log('returning!')

    return new Response(pngBuffer, {
      headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, immutable, no-transform, max-age=31536000' },
      status: 200,
    });
  },
};
