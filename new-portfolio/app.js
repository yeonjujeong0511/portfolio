const sectionBox = document.querySelectorAll("section");
console.log(sectionBox);
const header = document.querySelector("header");
console.log(header);

const today = new Date();
function makeTag(tagname, content) {
  return `<${tagname}>${content}</${tagname}>`;
}
header.innerHTML = makeTag("p", "2022.01.02");

const bgc = ["#bbb", "#ccc", "#ddd"];

for (let i = 0; i < sectionBox.length; i++) {
  sectionBox[i].style.backgroundColor = bgc[i];
}

// * 스크롤 바
// window.onload = function () {
//   const sectionBoxCount = sectionBox.length;
//   sectionBox.forEach(function (item, index) {
//     item.addEventListener("mousewheel", function (event) {
//       event.preventDefault();
//       let delta = 0;

//       if (!event) event = window.event;
//       if (event.wheelDelta) {
//         delta = event.wheelDelta / 120;
//         if (window.opera) delta = -delta;
//       } else if (event.detail) delta = -event.detail / 3;

//       let moveTop = window.scrollY;
//       let elmSelector = sectionBox[index];

//       // wheel down : move to next section
//       if (delta < 0) {
//         if (elmSelector !== sectionBoxCount - 1) {
//           try {
//             moveTop =
//               window.pageYOffset +
//               elmSelector.nextElementSibling.getBoundingClientRect().top;
//           } catch (e) {}
//         }
//       }

//       // wheel up : move to previous section
//       else {
//         if (elmSelector !== 0) {
//           try {
//             moveTop =
//               window.pageYOffset +
//               elmSelector.previousElementSibling.getBoundingClientRect().top;
//           } catch (e) {}
//         }
//       }

//       const body = document.querySelector("html");
//       window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
//     });
//   });
// };
