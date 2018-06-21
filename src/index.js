import dotenv from 'dotenv';
import { spawnSync } from 'child_process';

dotenv.config({ silent: true });

const args = process.argv.slice(2);
const res = spawnSync(
  args[0],
  args.slice(1),
  {
    env: process.env,
    stdio: 'inherit',
  },
);

if (res.status) {
	process.exit(res.status);
} else if (res.error) {
	process.exit(1);
}
