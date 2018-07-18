import dotenv from 'dotenv';
import path from 'path';
import { spawnSync } from 'child_process';

let args = process.argv.slice(2);
const opts = {
  silent: true
};

// Check if a path option has been passed.
if (args[0] === '-p') {
  Object.assign(opts, {
    path: path.resolve(process.cwd(), args[1])
  });
  // remove both args.
  args.splice(0, 2)
}

dotenv.config(opts);

const res = spawnSync(
  args[0],
  args.slice(1), {
    env: process.env,
    stdio: 'inherit',
  },
);

if (res.status) {
  process.exit(res.status);
} else if (res.error) {
  process.exit(1);
}