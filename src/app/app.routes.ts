import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { CustomComponent } from './custom/custom.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'scanner', component: ScannerComponent },
  { path: 'custom', component: CustomComponent },
  { path: '**', redirectTo: '' },
];
