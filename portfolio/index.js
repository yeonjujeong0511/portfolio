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

const firstPage = document.querySelector(".first-page");
console.log(firstPage);
/*
<div>
  <div></div>
  <p></p>
  <p></p>
  <p></p>
</div>
*/
function makeTag(parentName, innerhtml) {
  const parentElem = document.createElement(parentName);
  parentElem.innerHTML = innerhtml;
  return parentElem;
}
let imgDiv = `
  <div></div>
  <p></p>
  <p></p>
  <p></p>
  `;

//  append.appendChild(parentElem);
const box = makeTag("div", imgDiv);

firstPage.append(box);

console.log("git 설정 변경 확인");
