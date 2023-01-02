const sectionBox = document.querySelectorAll("section");
const header = document.querySelector("header");
console.log(header);
const firstSection = document.getElementById("first-section");
console.log(firstSection);
const today = new Date();

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
header.innerHTML = makeTagContent("p", "2022.01.02");

// ! 공통된 첫번째 titlebox
const titleDiv = `
<p></p>
<h2></h2>
`;

const titleContent = [
  {
    subName: "능동적인 front-end개발자",
    title: "ABOUT ME",
  },
  {
    subName: "개인프로젝트",
    title: "TOY PROJECT",
  },
  {
    subName: "팀프로젝트",
    title: "TEAM PROJECT",
  },
  {
    subName: "보유스킬 및 스택",
    title: "SKILS",
  },
  {
    subName: "연락",
    title: "CONTACT",
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

// * 스크롤 바
window.onload = function () {
  const sectionBoxCount = sectionBox.length;
  sectionBox.forEach(function (item, index) {
    item.addEventListener("mousewheel", function (event) {
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
