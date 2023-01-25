import { Reset } from "styled-reset";
import GlobalFont from "@/Styles/GlobalFont";
import Globalstyle from "@/Styles/Globalstyle";
import Header from "@/components/Header";
const App = () => {
  return (
    <>
      <Reset />
      <Globalstyle />
      <GlobalFont />
      <Header />
    </>
  );
};
export default App;
