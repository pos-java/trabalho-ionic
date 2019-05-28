import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProdutoraPage } from './produtora.page';
import { ProdutoraFormPage } from '../produtora-form/produtora-form.page';

const routes: Routes = [
   { path: '', component: ProdutoraPage },
   { path: 'new', component: ProdutoraFormPage },
   { path: ':id', component: ProdutoraPage }
];

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes)
   ],

   declarations: [ProdutoraPage, ProdutoraFormPage]
})
export class ProdutoraPageModule { }
