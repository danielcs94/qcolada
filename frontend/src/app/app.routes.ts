import { Routes } from '@angular/router';

import { Appliances } from './pages/appliances/appliances';
import { Basket } from './pages/basket/basket';
import { Scan } from './pages/scan/scan';

export const routes: Routes = [
  { path: '', component: Scan, title: 'QColada' },
  { path: 'colada', component: Basket, title: 'Colada · QColada' },
  { path: 'electrodomesticos', component: Appliances, title: 'Electrodomésticos · QColada' },
  { path: '**', redirectTo: '' },
];
