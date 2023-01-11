const dom = {
  articles: document.querySelectorAll("article"),
  sections: document.querySelectorAll("section"),
};

const image = [
  {
    name: "lp-player",
    src: "./img/lp-player.png",
  },
  {
    name: "lp-img",
    src: "./img/lp.png",
  },
  {
    name: "record",
    src: "./img/record.png",
  },
  {
    name: "play-btn",
    src: "./img/play-btn.png",
  },
  {
    name: "stop-btn",
    src: "./img/stop-btn.png",
  },
];

const bgc = [
  "#eee1",
  "#eee2",
  "#eee3",
  "#eee4",
  "#eee5",
  "#eee6",
  "#eee7",
  "#eee8",
];

const listName = [
  "About Me",
  "Skils",
  "TEAM_NongDam",
  "TEAM_뇌동매매",
  "TEAM_2남3녀",
  "Toy Project",
  "Contact",
];

function makeTag(tagName) {
  return `<${tagName}></${tagName}>`;
}

function makeTagContent(parentName, innerhtml) {
  const parentElem = document.createElement(parentName);
  parentElem.innerHTML = innerhtml;
  return parentElem;
}

function imgTag(imgsrc) {
  return `<img src=${imgsrc} />`;
}

imgTag("./img/stop-btn.png");

bgc.map((item, index) => {
  dom.sections[index].style.backgroundColor = item;
});

// 첫번째 article
//  lp-player 고정
dom.articles[0].innerHTML = `
${imgTag(image[0].src)}
${imgTag(image[1].src)}
`;

// 두번째 article

// 첫번째 scection
// 포트폴리오 메인 내용

dom.sections[0].innerHTML = `
${makeTag("div")}
${makeTag("div")}
${makeTag("div")}
`;

const olList = listName.map((item) => {
  return `<li>${item}</li>`;
});
console.log(olList);

const firstSectionChidlren = dom.sections[0].children;
console.log(firstSectionChidlren);
firstSectionChidlren[0].innerHTML = `${imgTag(image[2].src)}`;
console.log(firstSectionChidlren[1]);
firstSectionChidlren[1].append(makeTagContent("h1", "Developer JeongYeonJu"));
firstSectionChidlren[1].append(makeTagContent("ol", olList.join("")));
firstSectionChidlren[2].innerHTML = `
${imgTag(image[3].src)}
${imgTag(image[4].src)}
`;

// 두번째 scection
// 포트폴리오 about me

dom.sections[1].append(subMainbox());

function subMainbox() {
  const parentElem = document.createElement("div");
  parentElem.innerHTML = `
  ${imgTag(image[2].src)}
  ${imgTag(image[3].src)}
  ${imgTag(image[4].src)}
  `;
  return parentElem;
}
console.log(subMainbox());
