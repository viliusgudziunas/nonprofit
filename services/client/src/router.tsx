import { RouteModel } from './models/shared';
import { AboutUsPage } from './pages/AboutUsPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { HomePage } from './pages/HomePage';

export const appRoutes: RouteModel[] = [
  { name: 'Pagrindinis', path: '/', page: HomePage },
  { name: 'Apie mus', path: '/apie-mus', page: AboutUsPage },
  { name: 'Straipsniai', path: '/straipsniai', page: ArticlesPage },
  { name: 'Susisiek', path: '/susisiek', page: ContactUsPage },
];
