import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginService } from './login/login.service';

const routes: Routes = [

  {
    path: '', canActivate: [LoginService], children: [
      {path: 'home', loadChildren: './home/home.module#HomePageModule'},
      {path: 'genero', loadChildren: './genero/genero.module#GeneroPageModule'},
      {path: 'produtora', loadChildren: './produtora/produtora.module#ProdutoraPageModule'},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'list', loadChildren: './list/list.module#ListPageModule'}
    ]
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
