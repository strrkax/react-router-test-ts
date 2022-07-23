import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
//pages
import Content from './components/Content';
import StyledHome from './pages/Home';
import StyledSignIn from './pages/SignIn';
import StyledTeams from './pages/Teams';

import StyledTeamTemplate from './components/TeamTemplate';
import { teams } from './data/routes';



type Props = {};

const MainRoutes: React.FC = (props: Props): JSX.Element => {

  const team = teams.map(({ path, name, size, leader }, id) => {
    return (
      <Route
        key={id}
        path={path}
        element={
          <StyledTeamTemplate
          name={name}
          size={size}
          leader={leader} />
        }
      />
    );
  });

  return (
    <Routes>
      <Route path='/' element={<Content />}>
        <Route path='/' element={<Navigate replace to='home' />} />
        <Route path='/home' element={<StyledHome />} />
        <Route path='/teams' element={<StyledTeams />}>
          <Route path='/teams' element={<Navigate replace to='team1' />} />
          {team}
        </Route>
        <Route path='/signIn' element={<StyledSignIn />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;