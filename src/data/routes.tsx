type NavBarItem = {
  path: string;
  text: string;
  teams?: TeamsItem[] | TeamsItem;
};

type TeamsItem = {
  path: string;
  name: string;
  size: number;
  leader: string;
};

export const teams: TeamsItem[] = [
  {
    path: 'team1',
    name: 'Team 1',
    size: 5,
    leader: 'Stan',
  },

  {
    path: 'team2',
    name: 'Team 2',
    size: 12,
    leader: 'Dan',
  },

  {
    path: 'team3',
    name: 'Team 3',
    size: 13,
    leader: 'Ran',
  },

  {
    path: 'team4',
    name: 'Team 4',
    size: 14,
    leader: 'Lony',
  },

  {
    path: 'team5',
    name: 'Team 5',
    size: 13,
    leader: 'Donuy',
  },

  {
    path: 'team6',
    name: 'Team 6',
    size: 13,
    leader: 'Chle',
  },
];


export const NavBarRoutes: NavBarItem[] = [
  {
    path: '/home',
    text: 'Home',
  },

  {
    path: '/teams',
    text: 'Teams',
  },

  {
    path: '/signIn',
    text: 'Sign In',
  },

  {
    path: '/what',
    text: 'Sassy',
  },
];
