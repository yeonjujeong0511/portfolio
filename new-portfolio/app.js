const sectionBox = document.querySelectorAll("section");
const header = document.querySelector("header");
const sections = document.querySelectorAll("section");
const firstSection = document.getElementById("first-section");
const secondSection = document.getElementById("second-section");
const thirdSection = document.getElementById("third-section");
const forthSection = document.getElementById("forth-section");
const fifthSection = document.getElementById("fifth-section");
const sixthSection = document.getElementById("sixth-section");
const sventhSection = document.getElementById("sventh-section");
const eighthSection = document.getElementById("eighth-section");
const footer = document.querySelector("footer");
// console.log(footer);
// console.log(sections);
const todayDate = new Date();
const year = todayDate.getFullYear();
const month = todayDate.getMonth();

const date = todayDate.getDate();
const today = `${year}.${format(month + 1)}.${format(date)}`;
console.log(today);

// 0 이하면, 숫자 앞에 0을 붙이는 함수
function format(item) {
  if (item < 10) {
    return (item = `0${item}`);
  }
  return item;
}

function makeTag(tagName) {
  return `<${tagName}></${tagName}>`;
}

function makeTagContent(tagname, content) {
  return `<${tagname}>${content}</${tagname}>`;
}

function makeTagClass(parentName, parentClassName, innerhtml) {
  const parentElem = document.createElement(parentName);
  parentElem.className = parentClassName;
  parentElem.innerHTML = innerhtml;
  return parentElem;
}

// ! header !
header.innerHTML = makeTagContent("p", today);

// // ! footer
// footer.innerHTML = makeTagContent("p", "00");

// ! 공통된 첫번째 titlebox
const titleDiv = `
<p></p>
<h2></h2>
`;
// ! 공통된 contact div 생성 ! //
let contactDiv = `
<img />
<p></p>
`;

const logo = ["./img/git.png", "./img/ppt.png", "./img/video.png"];

const titleContent = [
  {
    subName: "능동적인 front-end개발자",
    title: "ABOUT ME",
  },
  {
    subName: "보유스킬 및 스택",
    title: "SKILS",
  },
  {
    subName: "팀프로젝트",
    title: "TEAM PROJECT",
  },
  {
    subName: "개인프로젝트",
    title: "TOY PROJECT",
  },

  {
    subName: "연락",
    title: "CONTACT",
  },
];

const stackImgSrc = [
  {
    name: "html",
    src: "../portfolio/img/HTML.png",
  },
  {
    name: "css",
    src: "../portfolio/img/CSS.png",
  },
  {
    name: "javascript",
    src: "../portfolio/img/js.png",
  },
  {
    name: "sass",
    src: "../portfolio/img/sass.png",
  },
  {
    name: "git",
    src: "../portfolio/img/git_2.png",
  },
  {
    name: "nodeJS",
    src: "../portfolio/img/node_js.png",
  },
  {
    name: "react",
    src: "../portfolio/img/react.png",
  },
  {
    name: "mySQL",
    src: "../portfolio/img/mysql.png",
  },
  {
    name: "figma",
    src: "../portfolio/img/figma.png",
  },
];

const contactItem = [
  {
    content: "yeonjujeong0511@gmail.com",
    img: "../portfolio/img/mail.png",
  },
  {
    content: "https://github.com/yeonjujeong0511",
    img: "../portfolio/img/git.png",
  },
  {
    content: "http://velog.io/@yeonju0511",
    img: "../portfolio/img/velog.png",
  },
];

// ! 첫번째 페이지
firstSection.innerHTML = `
${makeTag("div")}
${makeTag("img")}
`;
console.log(firstSection.children[1]);
firstSection.children[1].src = "./img/yeonju.png";

console.log(titleContent.length);
for (let i = 0; i < titleContent.length; i++) {
  firstSection.children[0].appendChild(
    makeTagClass("div", "title-box", titleDiv)
  );
}
const titleBox = document.querySelectorAll(".title-box");
console.log(titleBox[0].children[0]);
titleContent.map((item, index) => {
  // console.log(item.title);
  titleBox[index].children[0].innerHTML = item.subName;
  titleBox[index].children[1].innerHTML = item.title;
});
console.log(firstSection);

// !! 두번째 페이지 부터 공통 디자인
for (let i = 1; i < sections.length; i++) {
  sections[i].innerHTML = `
${makeTag("div")}
${makeTag("div")}
`;
  // console.log(sections[i]);
  sections[i].children[0].append(makeTagClass("div", "title-box", titleDiv));
}

// !!! 페이지 별 sidebar 공통으로 묶기
function sidebar(section, index) {
  const nameBox = section.children[0].children[0];
  nameBox.children[0].innerHTML = titleContent[index].subName;
  nameBox.children[1].innerHTML = titleContent[index].title;
}

// ! 두번째 페이지 (about me)

sidebar(secondSection, 0);
console.log(secondSection.children[1]);
secondSection.children[1].innerHTML = `
${makeTag("img")}
${makeTag("h3")}
${makeTag("p")}
${makeTag("div")}
`;
const childrenBox = secondSection.children[1];
childrenBox.children[0].src = "./img/aboutme.png";
childrenBox.children[1].innerHTML = "안녕하세요. front-end개발자 정연주입니다.";
childrenBox.children[2].innerHTML = `안녕하세요. front-end개발자 정연주입니다  저는 이러이러한 개발자가 되고싶습니다.<br>
 저는 이러이러한 개발자가 되고싶습니다  저는 이러이러한 개발자가 되고싶습니다<br>
 저는 이러이러한 개발자가 되고싶습니다  저는 이러이러한 개발자가 되고싶습니다`;

childrenBox.children[3].innerHTML = `
${makeTagContent("p", "교육")}
${makeTagContent("p", "22.07-23.01 그린컴퓨터아트학원")}
${makeTagContent("p", "기업에서 요구하는 프레임워크를 활용한 풀스택 개발자")}
${makeTagContent("p", "(NODE,ECMAscript)양성 과정")}
`;
// childrenBox.children[3].append(
//   makeTagContent("p", "22.07-23.01 그린컴퓨터아트학원")
// );
// childrenBox.children[3].append(
//   makeTagContent("p", "기업에서 요구하는 프레임워크를 활용한 풀스택 개발자")
// );
// childrenBox.children[3].append(
//   makeTagContent("p", "(NODE,ECMAscript)양성 과정")
// );
// const nameBox = secondSection.children[0].children[0];
// console.log(nameBox);
// nameBox.children[0].innerHTML = titleContent[0].subName;
// nameBox.children[1].innerHTML = titleContent[0].title;

// ! 세번째 페이지 (skils)

sidebar(thirdSection, 1);

for (let i = 0; i < stackImgSrc.length; i++) {
  const img = document.createElement("img");
  thirdSection.children[1].appendChild(img);
}
const stackImg = thirdSection.children[1].children;
for (let i = 0; i < stackImgSrc.length; i++) {
  stackImg[i].src = stackImgSrc[i].src;
}

// ! 네번째 페이지 (팀프로젝트1)

sidebar(forthSection, 2);

const projectPage = forthSection.children[1];
// projectPage.innerHTML = `
// ${makeTag("div")}
// ${makeTag("div")}
// ${makeTag("div")}
// `;

const firstbox = `
  <p></p>
  <img></img>
  <p></p>
  `;

function projectBox(parentelem, teamName) {
  parentelem.innerHTML = `
${makeTag("div")}
${makeTag("div")}
${makeTag("div")}
`;
  parentelem.children[0].innerHTML = `
  ${makeTagContent("p", teamName)}
  ${makeTag("div")}
  ${makeTagContent("p", "PROJECT")}
  `;
  parentelem.children[1].innerHTML = `
    ${makeTag("img")}
    ${makeTag("img")}
    ${makeTag("img")}
  `;
  logo.map((item, index) => {
    parentelem.children[1].children[index].src = item;
  });

  // 여기 임시로 해놓았음
  // 함수화 시키고 내용 객체화 필요
  parentelem.children[2].innerHTML = `
  ${makeTagContent("p", "프로젝트")}
  ${makeTagContent("p", "프로젝트")}
  ${makeTagContent("p", "프로젝트")}
  ${makeTagContent("p", "프로젝트")}
  ${makeTagContent("p", "프로젝트")} 
  ${makeTagContent("p", "프로젝트")}
  ${makeTagContent("p", "프로젝트")}
  ${makeTagContent("p", "프로젝트")}
  `;
}
projectBox(projectPage, "TEAM_NONGDAM");

// ! 다섯번째 페이지
sidebar(fifthSection, 2);

// ! 여섯번째 페이지
sidebar(sixthSection, 2);

// ! 일곱번째 페이지
sidebar(sventhSection, 3);

// ! 여덟번째 페이지
sidebar(eighthSection, 4);

for (let i = 0; i < 3; i++) {
  eighthSection.children[1].append(
    makeTagClass("div", "contact-box", contactDiv)
  );
}

const contactBoxs = document.querySelectorAll(".contact-box");

console.log(contactBoxs[0].children[0]);
for (let i = 0; i < contactBoxs.length; i++) {
  contactBoxs[i].children[0].src = contactItem[i].img;
  contactBoxs[i].children[1].innerHTML = contactItem[i].content;
}

// contactBox_p.forEach((element, index) => {
//   element.innerHTML = contactItem[index].content;
// });

// * 스크롤 바
// 페이지가 완전히 실행되면 아래 함수를 실행
// section -> 한 페이지
window.onload = function () {
  const sectionBoxCount = sectionBox.length;
  sectionBox.forEach(function (item, index) {
    item.addEventListener("wheel", function (event) {
      // console.log(event);
      event.preventDefault();
      let delta = 0;

      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;

      let moveTop = window.scrollY;
      let elmSelector = sectionBox[index];

      // wheel down : move to next section
      if (delta < 0) {
        if (elmSelector !== sectionBoxCount - 1) {
          try {
            moveTop =
              window.pageYOffset +
              elmSelector.nextElementSibling.getBoundingClientRect().top;
          } catch (e) {}
        }
      }

      // wheel up : move to previous section
      else {
        if (elmSelector !== 0) {
          try {
            moveTop =
              window.pageYOffset +
              elmSelector.previousElementSibling.getBoundingClientRect().top;
          } catch (e) {}
        }
      }

      const body = document.querySelector("html");
      window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
    });
  });
};
