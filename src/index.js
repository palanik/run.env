import dotenv from 'dotenv';
import { spawnSync } from 'child_process';

dotenv.config({ silent: true });

const args = process.argv.slice(2);
spawnSync(
  args[0],
  args.slice(1),
  {
    env: process.env,
    stdio: 'inherit',
  },
);
