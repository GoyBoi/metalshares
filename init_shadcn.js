const { spawn } = require('child_process');

// Spawn the shadcn init command
const initProcess = spawn('npx', ['shadcn@latest', 'init'], {
  cwd: process.cwd(),
  stdio: ['pipe', 'pipe', 'pipe']
});

// Send responses to the interactive prompts
let step = 0;
initProcess.stdout.on('data', (data) => {
  const output = data.toString();
  console.log(output);

  if (output.includes('Which style would you like to use?')) {
    setTimeout(() => {
      initProcess.stdin.write('1\\n'); // Select "New York"
    }, 100);
  } else if (output.includes('Which color would you like to use')) {
    setTimeout(() => {
      initProcess.stdin.write('3\\n'); // Select "Zinc"
    }, 100);
  }
});

initProcess.stderr.on('data', (data) => {
  console.error(data.toString());
});

initProcess.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
});