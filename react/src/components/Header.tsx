import styled from "styled-components";
const HeaderBox = styled.div`
  width: inherit;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "EF_jejudoldam";
  border-bottom: 5px solid #205375;
  & > div:nth-child(1) {
    width: 50%;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f66b0e;
    border-right: 5px solid #205375;

    font-size: 110px;
  }
  & > div:nth-child(2) {
    width: 50%;
    height: inherit;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 36px;
  }
`;
const Header = () => {
  return (
    <HeaderBox>
      <div>
        <p>ABOUT ME</p>
      </div>
      <div>
        <p>SKILS</p>
        <p>PROJECT</p>
        <p>CONTACT</p>
      </div>
    </HeaderBox>
  );
};

export default Header;
