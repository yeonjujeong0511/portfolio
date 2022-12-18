const documentElem = {
  header: document.getElementById("header"),
  section: document.querySelectorAll("section"),
};

function mainTag(tagName) {
  return `<${tagName}></${tagName}>`;
}

const headerName = ["ABOUT ME", "SKILS", "PROJECTS", "CONTACT"];

// header 생성
for (let i = 0; i < headerName.length; i++) {
  const pTag = document.createElement("p");
  pTag.innerHTML = headerName[i];
  documentElem.header.append(pTag);
}

console.log(documentElem.section);

// section 안에 각각 aricle 생성
documentElem.section.forEach((item) => {
  item.innerHTML = mainTag("article");
  item.firstChild.className = "ariticle-box";
});

// ! 공통된 img box 생성 ! //
function makeTag(parentName, innerhtml) {
  const parentElem = document.createElement(parentName);
  parentElem.innerHTML = innerhtml;
  return parentElem;
}
const imgDiv = `
  <div></div>
  <p></p>
  <p></p>
  <p></p>
  `;
const imgBox = makeTag("div", imgDiv);

// ! 공통된 title box 생성 ! //
const titleDiv = `
<p></p>
<div></div>
`;
const titleBox = makeTag("div", titleDiv);

// * 첫번째 section 구성* //
const firstSectionAricle = documentElem.section[0].children[0];

console.dir(firstSectionAricle);

firstSectionAricle.append(imgBox);
firstSectionAricle.appendChild(makeTag("div", mainTag("div")));

// * 두번째 section 구성* //
const secondSectionAricle = documentElem.section[1].children[0];

console.dir(secondSectionAricle);
secondSectionAricle.append(titleBox);
const div = document.createElement("div");
secondSectionAricle.appendChild(div);

for (let i = 0; i < 8; i++) {
  const div = document.createElement("div");
  secondSectionAricle.children[1].appendChild(div);
}
