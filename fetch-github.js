const https = require('https');

https.get('https://github-contributions-api.jasonbarry.vercel.app/api?username=ucilmenangis', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(data.substring(0, 500));
  });
}).on('error', err => console.log(err.message));
