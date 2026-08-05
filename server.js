const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

// Initialize Next.js app with explicit directory root for Phusion Passenger compatibility
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling request:', req.url, err);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    }
  });

  server.on('error', (err) => {
    console.error('Passenger HTTP Server Error:', err);
  });

  // Listen on port or socket provided by Phusion Passenger
  server.listen(port, () => {
    console.log(`> Erdoğan Palet App Ready on ${port} (mode: ${dev ? 'development' : 'production'})`);
  });
}).catch((err) => {
  console.error('Server initialization error:', err);
  process.exit(1);
});
