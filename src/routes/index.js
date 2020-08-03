export const routes = {
  home: '/',
  videos: '/videos',
  video: '/videos/:id',
  articles: '/articles',
  article: '/articles/:id',
  signin: '/signin',
  signup: '/signup',
};

const baseUrl = 'http://localhost:9000/api';

export const api = {
  login: `${baseUrl}/user/login`,
  logout: `${baseUrl}/user/logout`,
  register: `${baseUrl}/user/register`,
  pockets: `${baseUrl}/pockets`,
  pocketsByType: `${baseUrl}/pockets/type`,
  pocket: `${baseUrl}/pocket/`,
};
