import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyConverterComponent } from './pages/currency-converter/currency-converter.component';

const routes: Routes = [
  {path: 'converter', component: CurrencyConverterComponent },
  { path: '**', redirectTo: '/converter' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
