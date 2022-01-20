const { resolve } = require("path");
const {
  promises: { readdir },
} = require("fs");
const { spawn } = require("child_process");

const PATH_TO_EXAMPLES_REPO = "./";

const getDirectories = async (repo) =>
(await readdir(resolve(__dirname, repo), { withFileTypes: true }))
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

(async () => {
  try {
    const examples = await getDirectories(PATH_TO_EXAMPLES_REPO);

    examples.forEach((example) => {
      if (example.charAt(0) !== ".") {
        const child = spawn("bash");
        child.on("exit", (code) => {
          console.log(`${example} bump exit code: ${code}`);
        });

        child.stdin.write(`cd ${example}\n`);
        child.stdin.write(`npm i @esri/calcite-components@latest\n`);
        child.stdin.end();
      }
    });
  } catch (e) {
    console.error(e);
  }
})();