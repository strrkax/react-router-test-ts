import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { teams } from '../data/routes';

type Props = {
  className?: string
};

const TeamsNav = (props: Props) => {
  return (
    <div className={props.className}>
      {
        teams.map(({ path, name }, id) => {
          return (
            <NavLink
              to={path}
              key={id}>
              {name}
            </NavLink>
          );
        })
      }
    </div>
  );
};

const StyledTeamsNav = styled(TeamsNav)`
  display: flex;
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  
  a {
    text-decoration: none;
    color: red;
  }
`

export default StyledTeamsNav;