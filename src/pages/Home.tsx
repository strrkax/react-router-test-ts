import styled from 'styled-components';

type Props = {
  className?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
};

const Home = (props: Props) => {
  return (
    <div className={props.className}>
      Home
    </div>
  );
};

const StyledHome = styled(Home)`
    display: flex;
    position: relative;
    top: 7rem;
    margin: auto;
    background-color:	hsl(235, 22%, 41%);
    width: 70%;
    height: 50vh;
`;
export default StyledHome;