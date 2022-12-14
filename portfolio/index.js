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

const contactItem = [
  {
    content: "yeonjujeong0511@gmail.com",
    img: "./img/mail.png",
  },
  {
    content: "https://github.com/yeonjujeong0511",
    img: "./img/git.png",
  },
  {
    content: "http://velog.io/@yeonju0511",
    img: "./img/velog.png",
  },
];

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

const stackImgSrc = [
  {
    name: "html",
    src: "./img/HTML.png",
  },
  {
    name: "css",
    src: "./img/CSS.png",
  },
  {
    name: "javascript",
    src: "./img/js.png",
  },
  {
    name: "sass",
    src: "./img/sass.png",
  },
  {
    name: "git",
    src: "./img/git_2.png",
  },
  {
    name: "nodeJS",
    src: "./img/node_js.png",
  },
  {
    name: "react",
    src: "./img/react.png",
  },
  {
    name: "mySQL",
    src: "./img/mysql.png",
  },
  {
    name: "figma",
    src: "./img/figma.png",
  },
];

secondAritcle.append(makeTag("div", "title-box", titleDiv));
const div = document.createElement("div");
secondAritcle.appendChild(div);
for (let i = 0; i < stackImgSrc.length; i++) {
  const img = document.createElement("img");
  secondAritcle.children[1].appendChild(img);
}
const stackImg = secondAritcle.children[1].children;

stackImg[0].src = stackImgSrc[0].src;

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

const contactBox_img = document.querySelectorAll(".contact-box img");
const contactBox_p = document.querySelectorAll(".contact-box p");
console.log(contactBox_p);

contactBox_img.forEach((img, index) => {
  img.src = contactItem[index].img;
});

contactBox_p.forEach((element, index) => {
  element.innerHTML = contactItem[index].content;
});

// ! wheel 연습

const rootBox = document.getElementById("root");

let zoom = 1;
const ZOOM_SPEED = 0.1;
rootBox.addEventListener("mouseenter", function (e) {
  console.log("마우스");
  console.dir(e.target.style.width);
  // e.target.style.width = `${e.target.style.width * 2}px`;
  // e.target.style.height = `${e.target.style.height * 2}px`;
  // e.target.style.transition = "all 0.5s";
});
// document.addEventListener("wheel", function (e) {
//   console.log(e.deltaY);
//   console.log(e.deltaX);
//   console.log(rootBox.style.transform);
//   if (e.deltaY > 0) {
//     rootBox.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
//   } else {
//     rootBox.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
//   }
// });

function zoomIn(e) {
  e.target.style.width = `${e.target.style.width * 2}px`;
  e.target.style.height = `${e.target.style.height * 2}px`;
  e.target.style.transition = "all 0.5s";
}

function zoomOut(e) {
  e.target.style.width = e.target.style.width;
  e.target.style.height = e.target.style.height;
  e.target.style.transition = "all 0.5s";
}
