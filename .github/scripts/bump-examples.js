const { resolve } = require("path");
const {
  promises: { readdir },
} = require("fs");
const { spawn } = require("child_process");

const PATH_TO_EXAMPLES_REPO = "../..";

const getDirectories = async (repo) =>
  (await readdir(resolve(__dirname, repo), { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() && dirent.name.charAt(0) !== ".")
    .map((dirent) => dirent.name);

(async () => {
  try {
    const examples = await getDirectories(PATH_TO_EXAMPLES_REPO);

    examples.forEach((example) => {
      const child = spawn("bash");
      child.on("exit", (code) => {
        console.log(`${example} bump exit code: ${code}`);
      });

      if (example === "vue") {
        const anotherChild = spawn("bash");
        anotherChild.on("exit", (code) => {
          console.log(`vue3 bump exit code: ${code}`);
        });
        anotherChild.stdin.write(`cd ${example}/vue3\n`);
        anotherChild.stdin.write(`npm i @esri/calcite-components@latest\n`);
        anotherChild.stdin.end();

        child.stdin.write(`cd ${example}/vue2\n`);
      } else {
        child.stdin.write(`cd ${example}\n`);
      }
      child.stdin.write(`npm i @esri/calcite-components@latest\n`);
      child.stdin.end();
    });
  } catch (e) {
    console.error(e);
  }
})();
