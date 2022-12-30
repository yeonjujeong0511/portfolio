const root = document.getElementById("root");

root.addEventListener("mouseover", function () {
  root.style.transform = `scale(2)`;
});

root.addEventListener("mouseout", function () {
  root.style.transform = `scale(1)`;
});

root.addEventListener("mouseover", function (e) {
  let oriX = ((e.pageX - this.offsetLeft) / this.offsetWidth) * 100; // 현재마우스위치 - 이미지 기준 좌표(최초 0,0)
  let oriY = ((e.pageY - this.offsetTop) / this.offsetHeight) * 100;
  console.log(oriX);
  console.log(oriY);
  root.style.transformOrigin = `${oriX}% ${oriY}%`; // 기준점을 새로 설정한 위치로 변경
});

// 구현이 되는 데 좀 버벅거리는게 있음
