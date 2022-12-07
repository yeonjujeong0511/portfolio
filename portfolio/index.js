const root = document.getElementById("root");

console.dir(root);

function mainTag(tagName) {
  return `<${tagName}></${tagName}>`;
}

root.innerHTML = `
${mainTag("header")}
${mainTag("main")}
`;
const header = document.querySelector("header");
const main = document.querySelector("main");

console.dir(main);
