const { execSync } = require('child_process');
execSync('git checkout src/components/Timeline.astro', { stdio: 'inherit' });
