const documentElem = {
  header: document.getElementById("header"),
};

const headerName = ["ABOUT ME", "SKILS", "PROJECTS", "CONTACT"];

// header 생성
for (let i = 0; i < headerName.length; i++) {
  const pTag = document.createElement("p");
  pTag.innerHTML = headerName[i];
  documentElem.header.append(pTag);
}
