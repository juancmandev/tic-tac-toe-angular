import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { ButtonModule } from 'src/components/button/button.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule
  ],
  declarations: [
    HomePage
  ],
  exports: [
    HomePage
  ]
})
export class HomeModule { }