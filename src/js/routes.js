import WelcomePage from '../pages/welcome.svelte';
import FormPage from '../pages/form.svelte';
import Login from '../pages/login.svelte'
import NotFoundPage from '../pages/404.svelte';

var routes = [
  {
    path: '/welcome/',
    component: WelcomePage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/login/',
    component: Login,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
