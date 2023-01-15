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

const skils = [
  "./img/skil_HTML.png",
  "./img/skil_CSS.png",
  "./img/skil_js.png",
  "./img/skil_sass.png",
  "./img/skil_mysql.png",
  "./img/skil_node_js.png",
  "./img/skil_react.png",
  "./img/skil_git.png",
  "./img/skil_figma.png",
];

const bgc = ["#eee1", "#eee2", "#eee3", "#eee4", "#eee5", "#eee6", "#eee7"];

const listName = [
  "1. About Me",
  "2. Skils",
  "3. TEAM_NongDam",
  "4. TEAM_뇌동매매",
  "5. TEAM_2남3녀",
  "6. Toy Project",
];

const contact = [
  {
    src: "https://github.com/yeonjujeong0511",
    img: "./img/git_2.png",
  },
  {
    src: "yeonjujeong0511@gmail.com",
    img: "./img/mail.png",
  },
  {
    src: "https://velog.io/@yeonju0511",
    img: "./img/velog.png",
  },
];

const logo = ["./img/git.png", "./img/ppt.png", "./img/video.png"];

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

// 페이지 구분용 (임시)
bgc.map((item, index) => {
  dom.sections[index].style.backgroundColor = item;
});

function imgSrc(imgsrc) {
  const img = document.createElement("img");
  img.src = imgsrc;
  return img;
}

// 첫번째 article
//  lp-player 고정
dom.articles[0].innerHTML = `
${imgTag(image[0].src)}
${imgTag(image[1].src)}
${makeTag("div")}
`;

// contact 버튼 생성 및 새 페이지로 이동
contact.map((item, index) => {
  dom.articles[0].children[2].append(imgSrc(item.img));
  const contacts = dom.articles[0].children[2].children;
  contacts[index].addEventListener("click", () => {
    window.open(item.src);
  });
});

// 두번째 article

// 첫번째 scection
// 포트폴리오 메인 내용

dom.sections[0].innerHTML = `
${makeTag("div")}
${makeTag("div")}
${makeTag("div")}
`;

const ulList = listName.map((item) => {
  return `<li>${item}</li>`;
});

const firstSectionChidlren = dom.sections[0].children;
firstSectionChidlren[0].innerHTML = `${imgTag(image[2].src)}`;
firstSectionChidlren[1].append(makeTagContent("h1", "Developer JeongYeonJu"));
firstSectionChidlren[1].append(makeTagContent("ul", ulList.join("")));
firstSectionChidlren[2].innerHTML = `
${imgTag(image[3].src)}
${imgTag(image[4].src)}
`;

// 두번째 부터 마지막까지 상단 앨범과 재생바
function subMainbox() {
  const parentElem = document.createElement("div");
  parentElem.className = "sub-Mainbox";
  parentElem.innerHTML = `
  ${imgTag(image[2].src)}
  ${imgTag(image[3].src)}
  ${imgTag(image[4].src)}
  `;

  // 재생바 이벤트
  parentElem.children[1].addEventListener("click", function () {
    dom.articles[0].children[1].classList.add("play");
  });
  parentElem.children[2].addEventListener("click", function () {
    dom.articles[0].children[1].classList.remove("play");
  });
  return parentElem;
}

// 상단 앨범 및 재생바 & h2 제목 리스트 반복
for (let i = 0; i < listName.length; i++) {
  dom.sections[i + 1].append(subMainbox());
  dom.sections[i + 1].append(makeTagContent("h2", listName[i]));
}

// 두번째 scection
// 포트폴리오 about me

dom.sections[1].append(makeTagContent("div", "<h4></h4><p></p>"));

// 세번째 section
// 포트폴리오 skils

const skilsDiv = document.createElement("div");
dom.sections[2].append(skilsDiv);
skils.map((item, index) => {
  imgSrc(item);
  skilsDiv.append(imgSrc(item));
});

dom.sections[2].append(
  makeTagContent(
    "p",
    "언어의 구분없이 다양한 언어와 기술을 끊임없이 공부하겠습니다."
  )
);

// 네번째 scection
// 포트폴리오 농담 팀프로젝트

const projectDict = [
  {
    img: "./img/project_img1.png",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa reiciendis cumque non, placeat libero ut nobis laudantium. Ad hic quos corrupti autem nam impedit atque sequi expedita, ipsam laborum.",
    git_URL: "https://github.com/dlehdrb128/NongDam_Project",
    ppt_URL:
      "https://docs.google.com/presentation/d/1ESWnb4PfglA9sY83oKuCwUg_paIVlzEwiXopro77-A4/edit?usp=sharing",
    video_URL: "",
  },
  {
    img: "./img/project_img1.png",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa reiciendis cumque non, placeat libero ut nobis laudantium. Ad hic quos corrupti autem nam impedit atque sequi expedita, ipsam laborum.",
    git_URL: " https://github.com/polarisjyb/Project-A-",
    ppt_URL:
      "https://docs.google.com/presentation/d/1K1Q_1AjKpgH4LMkfEvRRY6sEmjXVSWsJ1HAM4wb_vgg/edit?usp=sharing",
    video_URL:
      "https://drive.google.com/file/d/1ikI3nhkqNMAwaCuUiV1yM8RXi7UxYIod/view?usp=sharing",
  },
  {
    img: "./img/project_img1.png",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa reiciendis cumque non, placeat libero ut nobis laudantium. Ad hic quos corrupti autem nam impedit atque sequi expedita, ipsam laborum.",
    git_URL: "https://github.com/MAGEUNWON/ProjectB",
    ppt_URL:
      "https://docs.google.com/presentation/d/1VaBPeeXwe-Dwbqv0SOh-AAFMLvWgEcT248g7eLcv35g/edit?usp=sharing",
    video_URL: "https://youtu.be/ibJ0NYnnHGc",
  },
];

function project(projectDict) {
  const div = document.createElement("div");
  div.innerHTML = `
    ${makeTag("div")}
    ${makeTag("div")}
    ${makeTag("div")}
  `;
  div.className = "project";
  console.log(div.children[0]);
  div.children[0].append(imgSrc(projectDict.img));
  div.children[0].append(makeTagContent("p", "PROJECT"));

  logo.map((item) => {
    div.children[1].append(imgSrc(item));
  });
  function clickEvent(btn, src) {
    btn.addEventListener("click", () => {
      window.open(src);
    });
  }
  const logoBtn = div.children[1].children;
  clickEvent(logoBtn[0], projectDict.git_URL);
  clickEvent(logoBtn[1], projectDict.ppt_URL);
  clickEvent(logoBtn[2], projectDict.video_URL);
  div.children[2].append(makeTagContent("p", projectDict.content));
  return div;
}

dom.sections[3].append(project(projectDict[0]));

// 다섯번째 scection
// 포트폴리오 뇌동매매 팀프로젝트
dom.sections[4].append(project(projectDict[1]));

// 여섯번째 scection
// 포트폴리오 2남3녀 팀프로젝트
dom.sections[5].append(project(projectDict[2]));

// click event

// 첫번째 메인 페이지에 레코드판 돌리는 효과
firstSectionChidlren[2].children[0].addEventListener("click", function () {
  dom.articles[0].children[1].classList.add("play");
});
firstSectionChidlren[2].children[1].addEventListener("click", function () {
  dom.articles[0].children[1].classList.remove("play");
});
