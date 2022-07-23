import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TeamsNav from '../components/TeamsNav';

type Props = {
  className?: string;
};

const Teams = (props: Props) => {
  return (
    <div className={props.className}>
      <TeamsNav />
      <Outlet />
    </div>
  );
};

const StyledTeams = styled(Teams)`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 7rem;
    margin: auto;
    background-color:	hsl(235, 22%, 41%);
    width: 70%;
    height: 60vh;
`;

export default StyledTeams;