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

// ! profile box 생성 ! //
let profileDiv = `
  <h1></h1>
  <p></p>
  <p></p>
  <div></div>
  `;

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
// console.dir(firstArticle);

firstArticle.append(makeTag("div", "div", mainTag("img")));
firstArticle.append(makeTag("div", "profile-box", profileDiv));

const profileImg = firstArticle.children[0].children[0];

profileImg.src = "./img/profile.png";

const profileContent = [
  `"끊임없는 궁금증으로 능동적인 개발자가 되겠습니다."`,
  "안녕하세요. front-end개발자 정연주입니다.",
  `저는 이러이러한 개발자가 되고싶습니다<br/>저는 이러이러한 개발자가 되고싶습니다<br/>저는 이러이러한 개발자가 되고싶습니다<br/>저는 이러이러한 개발자가 되고싶습니다<br/>저는 이러이러한 개발자가 되고싶습니다`,
];

const profileBox = document.querySelector(".profile-box");
for (let i = 0; i < profileContent.length; i++) {
  profileBox.children[i].innerHTML = profileContent[i];
}

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

for (let i = 0; i < stackImgSrc.length; i++) {
  stackImg[i].src = stackImgSrc[i].src;
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

const contactBox_img = document.querySelectorAll(".contact-box img");
const contactBox_p = document.querySelectorAll(".contact-box p");
console.log(contactBox_p);

contactBox_img.forEach((img, index) => {
  img.src = contactItem[index].img;
});

contactBox_p.forEach((element, index) => {
  element.innerHTML = contactItem[index].content;
});
