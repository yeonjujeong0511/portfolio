const documentElem = {
  header: document.getElementById("header"),
  sections: document.querySelectorAll("section"),
  section1: document.getElementById("first-page"),
  section2: document.getElementById("second-page"),
  section3: document.getElementById("third-page"),
  section4: document.getElementById("fourth-page"),
};
console.log(documentElem.section1);
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

// section 안에 각각 aricle 생성
documentElem.sections.forEach((item) => {
  item.innerHTML = mainTag("article");
  item.firstChild.className = "article-box";
});

function makeTag(parentName, parentClassName, innerhtml) {
  const parentElem = document.createElement(parentName);
  parentElem.className = parentClassName;
  parentElem.innerHTML = innerhtml;
  return parentElem;
}

// ! 공통된 img div 생성 ! //
let imgDiv = `
  <div></div>
  <p></p>
  <p></p>
  <p></p>
  `;

// ! 공통된 title div 생성 ! //
let titleDiv = `
<p></p>
<div></div>
`;

// ! 공통된 contact div 생성 ! //
let contactDiv = `
<img />
<p></p>
`;

// * 첫번째 section 구성* //
const firstArticle = documentElem.section1.children[0];
console.dir(firstArticle);

firstArticle.append(makeTag("div", "img-box", imgDiv));
firstArticle.appendChild(makeTag("div", "div", mainTag("div")));

// * 두번째 section 구성* //
const secondAritcle = documentElem.section2.children[0];

secondAritcle.append(makeTag("div", "title-box", titleDiv));
const div = document.createElement("div");
secondAritcle.appendChild(div);
for (let i = 0; i < 8; i++) {
  const div = document.createElement("div");
  secondAritcle.children[1].appendChild(div);
}

// * 세번째 section 구성* //

const thirdArticle = documentElem.section3.children[0];

thirdArticle.innerHTML = `
${mainTag("div")}
${mainTag("div")}
`;

thirdArticle.children[0].append(makeTag("div", "title-box", titleDiv));

const createDiv = document.createElement("div");
thirdArticle.children[0].append(createDiv);

for (let i = 0; i < 3; i++) {
  thirdArticle.children[0].children[1].appendChild(
    makeTag("div", "img-box", imgDiv)
  );
}
thirdArticle.children[1].append(makeTag("div", "title-box", titleDiv));

thirdArticle.children[1].append(makeTag("div", "img-box", imgDiv));

// * 네번째 section 구성* //

const fourthArticle = documentElem.section4.children[0];

fourthArticle.append(makeTag("div", "title-box", titleDiv));

fourthArticle.append(document.createElement("div"));

for (let i = 0; i < 3; i++) {
  fourthArticle.children[1].appendChild(
    makeTag("div", "contact-box", contactDiv)
  );
}
const titleBoxName = ["기술", "팀프로젝트", "개인프로젝트", "연락"];
const titleBoxP = document.querySelectorAll(".title-box p");
console.log(titleBoxP);

titleBoxP.forEach((element, index) => {
  console.log(element);
  element.innerHTML = titleBoxName[index];
});
console.log("자격 확인");
