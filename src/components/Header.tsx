import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavBarRoutes } from '../data/routes';

type Props = {
  className?: string;
};

const Header: React.FC = (props: Props): JSX.Element => {

  const NavBarButtons = NavBarRoutes.map(({ path, text }, id) => {
    return <NavLink to={path} key={id}>{text}</NavLink>;
  });


  return (
    <div className={props.className}>
      <div className="buttonWrapper">
        {NavBarButtons}
      </div>
    </div>
  );
};

const StyledHeader = styled(Header)`
    width: 100vw;
    height: 7rem;
    background-color: hsl(272, 19%, 50%);

    // text
    color: aliceblue;

    
    .buttonWrapper {
      display: flex;
      gap: 2rem;
    }

    a {
      color: #D6D5A8;
      text-decoration: none;
      font-size: 2rem;
    }
`;

export default StyledHeader;