import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { Signin } from './pages/signin/signin';
import { Signup } from './pages/signup/signup';
import { Home } from './pages/home/home';
import { Search } from './pages/search/search';
import { BestDeals } from './pages/best-deals/best-deals';
import { StoreDetails } from './pages/store-details/store-details';
import { SurpriseBags } from './pages/surprise-bags/surprise-bags';
import { BoxDetails } from './pages/box-details/box-details';
import { Favorites } from './pages/favorites/favorites';



export const routes: Routes = [
  { path: '', component: Welcome },
  { path: 'signin', component: Signin },
  { path: 'signup', component: Signup },
  { path: 'home', component: Home },
  { path: 'search', component: Search },
  { path: 'best-deals', component: BestDeals },
  { path: 'store/:id', component: StoreDetails },
  { path: 'surprise-bags', component: SurpriseBags },
  { path: 'box/:type', component: BoxDetails },
  { path: 'favorites', component: Favorites }
];