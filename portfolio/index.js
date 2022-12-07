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

for (let i = 0; i < 4; i++) {
  const section = document.createElement("section");
  main.append(section);
}

const sectionClass = ["first-page", "second-page", "third-page", "fourth-page"];

const sections = document.querySelectorAll("section");
console.log(sections);

sections.forEach((item, index) => {
  item.className = sectionClass[index];
});
