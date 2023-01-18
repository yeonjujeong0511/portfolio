const dom = {
  articles: document.querySelectorAll("article"),
  sections: document.querySelectorAll("section"),
};

const image = [
  {
    name: "lp-player",
    src: "https://images2.imgbox.com/45/6d/e5MgYSML_o.png",
  },
  {
    name: "lp-img",
    src: "https://images2.imgbox.com/7a/5b/4Umz6Sm9_o.png",
  },
  {
    name: "record",
    src: "https://images2.imgbox.com/c4/b4/DiPi3Wbr_o.png",
  },
  {
    name: "play-btn",
    src: "https://images2.imgbox.com/8e/0e/5wdGGj5E_o.png",
  },
  {
    name: "stop-btn",
    src: "https://images2.imgbox.com/e2/ce/WlCBY6Yw_o.png",
  },
];

const skils = [
  "https://images2.imgbox.com/14/c4/hL4bEmDY_o.png",
  "https://images2.imgbox.com/d7/d3/kNXttwxL_o.png",
  "https://images2.imgbox.com/24/31/oRNUpieN_o.png",
  "https://images2.imgbox.com/62/33/FFQeMXfH_o.png",
  "https://images2.imgbox.com/95/02/Xl941NTk_o.png",
  "https://images2.imgbox.com/9b/57/9UNZzD0e_o.png",
  "https://images2.imgbox.com/32/b6/vWULvTDw_o.png",
  "https://images2.imgbox.com/8c/d9/jkyUbUyI_o.png",
  "https://images2.imgbox.com/29/59/lx6OJMqT_o.png",
  "https://images2.imgbox.com/c4/a0/7k0iOWg2_o.png",
  "https://images2.imgbox.com/11/af/fgdRrkAu_o.png",
  "https://images2.imgbox.com/a8/28/6JGtCsBI_o.png",
  "https://images2.imgbox.com/35/48/M7dtSi5W_o.png",
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
    img: "https://images2.imgbox.com/f9/f4/7nzd6Hv0_o.png",
  },
  {
    src: "yeonjujeong0511@gmail.com",
    img: "https://images2.imgbox.com/94/81/kyjGCqLm_o.png",
  },
  {
    src: "https://velog.io/@yeonju0511",
    img: "https://images2.imgbox.com/43/0a/f6idVWBV_o.png",
  },
];

const logo = [
  "https://images2.imgbox.com/25/d6/ebhiJ0HL_o.png",
  "https://images2.imgbox.com/8d/23/lCR5k1zt_o.png",
  "https://images2.imgbox.com/5a/f5/eoBpZtrH_o.png",
];

const btn = [
  "https://images2.imgbox.com/c1/e5/01z2Y2QD_o.png",
  "https://images2.imgbox.com/94/54/gZKPIvJc_o.png",
];

function makeTag(tagName) {
  return `<${tagName}></${tagName}>`;
}

function makeTagContent(parentName, innerhtml) {
  const parentElem = document.createElement(parentName);
  parentElem.innerHTML = innerhtml;
  return parentElem;
}
function elemClassName(tagName, className) {
  const elem = document.createElement(tagName);
  elem.className = className;
  return elem;
}
function imgTag(imgsrc) {
  return `<img src=${imgsrc} />`;
}

function imgSrc(imgsrc) {
  const img = document.createElement("img");
  img.src = imgsrc;
  return img;
}
// 페이지 구분용 (임시)
bgc.map((item, index) => {
  dom.sections[index].style.backgroundColor = item;
});

// ! 첫번째 article
//  lp-player 고정
dom.articles[0].innerHTML = `
${imgTag(image[0].src)}
${imgTag(image[1].src)}
${makeTag("div")}
`;

// 첫번째 메인 페이지에 레코드판 돌리는 효과

dom.articles[0].children[2].innerHTML = `
  ${imgTag(image[3].src)}
  ${imgTag(image[4].src)}
  `;

dom.articles[0].children[2].children[0].addEventListener("click", function () {
  dom.articles[0].children[1].classList.add("play");
});
dom.articles[0].children[2].children[1].addEventListener("click", function () {
  dom.articles[0].children[1].classList.remove("play");
  window.scrollTo({
    top: 0,
  });
});

//  ! 두번째 article 시작

// 첫번째 scection
// 포트폴리오 메인 내용

dom.sections[0].innerHTML = `
${makeTag("div")}
${makeTag("div")}
${makeTag("div")}
`;

const newListName = [];
for (let i = 0; i < listName.length; i++) {
  newListName.push(listName[i].substring(3));
}
// console.log(newListName);

const ulList = listName.map((item, index) => {
  return `<li><a href="#${newListName[index]}">${item}</a></li>`;
});
console.log(ulList);

const firstSectionChidlren = dom.sections[0].children;
firstSectionChidlren[0].innerHTML = `${imgTag(image[2].src)}`;
firstSectionChidlren[1].append(makeTagContent("h1", "Developer JeongYeonJu"));
console.log(ulList);
firstSectionChidlren[1].append(makeTagContent("ul", ulList.join("")));

// contact 버튼 생성 및 새 페이지로 이동
contact.map((item, index) => {
  firstSectionChidlren[2].append(imgSrc(item.img));
  const contacts = firstSectionChidlren[2].children;
  contacts[index].addEventListener("click", () => {
    window.open(item.src);
  });
});

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
    window.scrollTo({
      top: 0,
    });
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
    img: [
      "https://images2.imgbox.com/bb/3a/pZztdzIm_o.jpg",
      "https://images2.imgbox.com/44/86/hMJJ6sU8_o.jpg",
      "https://images2.imgbox.com/b0/d0/cw2u0N8x_o.jpg",
      "https://images2.imgbox.com/dd/03/YzW4JToz_o.jpg",
      "https://images2.imgbox.com/a9/b6/kyfHF5Zb_o.jpg",
      "https://images2.imgbox.com/92/e8/7B0bjZEg_o.jpg",
      "https://images2.imgbox.com/34/be/mD8qfbmU_o.jpg",
    ],
    git_URL: "https://github.com/dlehdrb128/NongDam_Project",
    ppt_URL:
      "https://docs.google.com/presentation/d/1ESWnb4PfglA9sY83oKuCwUg_paIVlzEwiXopro77-A4/edit?usp=sharing",
    video_URL: "https://www.youtube.com/watch?v=RJfUY6SItwo",
    name: "못난이 농산물 판매 서비스",
    period: "22.09.07 - 22.10.26 ( 5인 프로젝트 )",
    desc: "node.js로 서버를 구축 및 mySQL DB 연결해서 데이터를 저장 시키고, React로  화면에 출력하였다.로그인으로 권한 확인을 하여 사업자회원과 일반회원의 페이지 출력을 다르게 설정하여 회원에 맞는 기능을 구현시켰다.",
    function:
      "로그인, 상품 검색, 상품 상세페이지, 상품 리뷰, 장바구니, 레시피 검색, 레시피 등록, 5일장 정보, 스토어 정보, 사업자 회원 스토어 및 상품등록",
    etc: "사업자회원 페이지를 맡아  front와 back 작업을 모두 하였고 스토어와 상품등록 기능 외에 다른 기능을 더 구현하지 못해서 아쉬웠지만, 입력한 정보를 DB에서 저장하고 불러오는 기능을 배웠다. React를 처음 사용하여  SPA에 대해 이해 할 수있는 시간이였다.",
  },
  {
    img: [
      "https://images2.imgbox.com/44/d1/poGT8Sc4_o.jpg",
      "https://images2.imgbox.com/01/8d/l4GEHN6b_o.jpg",
      "https://images2.imgbox.com/28/86/nvEQTqsr_o.jpg",
    ],
    git_URL: " https://github.com/polarisjyb/Project-A-",
    ppt_URL:
      "https://docs.google.com/presentation/d/1K1Q_1AjKpgH4LMkfEvRRY6sEmjXVSWsJ1HAM4wb_vgg/edit?usp=sharing",
    video_URL:
      "https://drive.google.com/file/d/1ikI3nhkqNMAwaCuUiV1yM8RXi7UxYIod/view?usp=sharing",
    name: "주식 매도.매수 추천 서비스",
    period: " 22.11.07 - 22.12.02 ( 4인 프로젝트 )",
    desc: "주어진 데이터를 기반으로 파이썬에서 maria DB 연동 후 React로 화면 구성 및 컴포넌트 구성을 하였고, 4가지의 알고리즘을 통해 각가의 매수와 매도를 추천해준 후 종합적으로 매수와 매도의  비율을 제공해주었다.",
    function:
      "각 종목별 정보 및 기간별 캔틀차트, 전략별 알고리즘을 통한 매수·매도추천 서비스",
    etc: "전체적인 컴포넌트 구성 및  종목별 정보 출력, 거래량 알고리즘을 맡아서 하였고, 검색 기능 구현을 하지 못 해서 차트에 있는 종목만 클릭을 통해  정보를 알 수 있던 점이 아쉬웠지만 파이썬을 통한  데이터베이스 및 서버 연동에 대해 배울 수 있었고, 알고리즘을 통해 각 종목의 결과를 나타낼  수 있었다",
  },
  {
    img: [
      "https://images2.imgbox.com/f8/a4/28x0MPhI_o.jpg",
      "https://images2.imgbox.com/13/58/g9Qc8r7Y_o.jpg",
      "https://images2.imgbox.com/c2/21/LjSFhnsO_o.jpg",
    ],
    git_URL: "https://github.com/MAGEUNWON/ProjectB",
    ppt_URL:
      "https://docs.google.com/presentation/d/1VaBPeeXwe-Dwbqv0SOh-AAFMLvWgEcT248g7eLcv35g/edit?usp=sharing",
    video_URL: "https://youtu.be/ibJ0NYnnHGc",
    name: "대전 교통 안내 서비스 및 네비게이션 서비스",
    period: "22.12.12 - 22.12.23 ( 5인 프로젝트 )",
    desc: " 다양한 API를 활용하여 데이터를 정보를 지도에 표시하고, 파이썬으로 서버 구축 및 DB를 가공하였고 React로 map API를 출력하였다. 주어진 노드 및 링크 데이터를 가공하여 클릭시, 소요시간 및 거리정보를 제공해주었다.",
    function:
      "CCTV 정보, 도로 돌발 상황 정보, 보호구역 정보, 주차장 정보, 지도 검색 기능, 길찾기 기능",
    etc: "실시간 돌발정보와 주차장 정보 마커 표시를 맡아서 하였고 지도 api에 다양한 기능을 구현했어야 해서 전역 상태관리의 필요성을 느꼈고 DB 테이블의 컬럼명을 공통으로 설정하지 못한 부분이 아쉬웠다. 그렇지만 다양한 API를 활용할 수 있었고, 파이썬을 이용해 API를 DB에 저장할 수 있었다. ",
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
  div.children[0].innerHTML = `
  ${makeTag("img")}
  ${makeTag("div")}
  ${makeTag("img")}
  `;
  const projectImg = div.children[0];
  projectImg.children[0].src = btn[0];
  projectImg.children[2].src = btn[1];

  projectImg.children[1].append(elemClassName("div", "img-container"));
  const imgContainer = projectImg.children[1].children[0];

  console.log(projectDict.img);
  function imgbox(imgsrc) {
    const imgBox = document.createElement("div");
    const img = document.createElement("img");
    imgBox.append(img);
    img.src = imgsrc;
    return imgBox;
  }
  for (let i = 0; i < projectDict.img.length; i++) {
    imgContainer.append(imgbox(projectDict.img[i]));
  }
  const slides = imgContainer.children;
  console.log(slides);
  const slideImg = document.querySelectorAll(".img-container div");
  console.log(slideImg);
  let counter = 0;
  const prevBtn = projectImg.children[0];
  const nextBtn = projectImg.children[2];

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = `${i * 100}%`;
  }
  // slides.forEach(function (slide, index) {
  //   slide.style.left = `${index * 100}%`;
  //   // console.log(slide);
  // });
  nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
  });
  prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
  });

  function carousel() {
    // 버튼 보이고, 안보이고!
    if (counter < slides.length - 1) {
      nextBtn.style.display = "block";
    } else {
      nextBtn.style.display = "none";
    }
    if (counter > 0) {
      prevBtn.style.display = "block";
    } else {
      prevBtn.style.display = "none";
    }

    // 함수 실행될때마다, translateX의 값으로 위치 조정
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(-${counter * 100}%)`;
    }
    // slides.forEach(function (slide) {
    //   console.log(slide);
    //   slide.style.transform = `translateX(-${counter * 100}%)`;
    // });
  }
  prevBtn.style.display = "none";
  console.log(projectDict.img.length);
  projectImg.children[1].append(makeTagContent("p", "PROJECT"));

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
  console.log(div.children[2]);
  const desc = div.children[2];
  desc.append(makeTagContent("h3", projectDict.name));
  desc.append(makeTagContent("p", projectDict.period));
  desc.append(makeTagContent("p", projectDict.desc));
  desc.append(makeTagContent("h4", "주요기능"));
  desc.append(makeTagContent("p", projectDict.function));
  desc.append(makeTagContent("h4", "아쉬운점 및 발전사항"));
  desc.append(makeTagContent("p", projectDict.etc));

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

// * 스크롤 바
window.onload = function () {
  const sectionBoxCount = dom.sections.length;
  dom.sections.forEach(function (item, index) {
    item.addEventListener("mousewheel", function (event) {
      event.preventDefault();
      let delta = 0;

      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;

      let moveTop = window.scrollY;
      let elmSelector = dom.sections[index];

      // wheel down : move to next section
      if (delta < 0) {
        if (elmSelector !== dom.sections.Count - 1) {
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
      window.scrollTo({ top: moveTop });
    });
  });
};
