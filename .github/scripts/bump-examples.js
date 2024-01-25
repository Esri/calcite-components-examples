const { resolve } = require('path');
const {
  promises: { readdir }
} = require('fs');
const { spawn } = require('child_process');

const getDirectories = async (repo) =>
  (await readdir(resolve(__dirname, repo), { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() && dirent.name.charAt(0) !== '.')
    .map((dirent) => dirent.name);

(async () => {
  try {
    const PATH_TO_EXAMPLES_REPO = '../..';
    const examples = await getDirectories(PATH_TO_EXAMPLES_REPO);

    const installLatestCC = 'npm i @esri/calcite-components@latest\n';
    const installLatestCCReact =
      'npm i @esri/calcite-components-react@latest\n';
    const installLatestCCAngular =
      'npm i @esri/calcite-components-angular@latest\n';

    examples.forEach((example) => {
      const child = spawn('bash');
      child.on('exit', (code) => {
        console.log(`${example} bump exit code: ${code}`);
      });

      switch (example) {
        case 'react':
          child.stdin.write(`cd ${example}\n`);
          child.stdin.write(installLatestCCReact);
          break;
        case 'angular':
          child.stdin.write(`cd ${example}\n`);
          child.stdin.write(installLatestCCAngular);
          break;
        default:
          child.stdin.write(`cd ${example}\n`);
          child.stdin.write(installLatestCC);
      }
      child.stdin.end();
    });
  } catch (e) {
    console.error(e);
  }
})();
