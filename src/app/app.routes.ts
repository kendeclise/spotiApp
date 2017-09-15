import { RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';

const APP_ROUTES: Routes = [
  // Aqui van todas las rutas
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'} // si no se encuentra la ruta de arriba, redirecciona a esta
];

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES , {useHash: true} );
