import styled from "styled-components";
const HeaderBox = styled.div`
  width: inherit;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    justify-content: center;
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
        <p>CONTACT </p>
      </div>
    </HeaderBox>
  );
};

export default Header;
