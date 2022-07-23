import { Link, Route, Routes } from "react-router-dom";
import MainRoutes from "./Routes";
import GlobalStyle, { Container } from "./GlobalStyles.style";
import StyledHeader from './components/Header';



type Props = {};

const App: React.FC = (props: Props): JSX.Element => {

  return (
    <>
      <GlobalStyle />
      <StyledHeader />
      <MainRoutes />
    </>
  );
};


export default App;