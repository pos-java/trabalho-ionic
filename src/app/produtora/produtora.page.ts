import { Component, OnInit } from '@angular/core';
import { Produtora } from '../model/produtora';
import { ProdutoraService } from '../service/produtora.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
   selector: 'app-produtora',
   templateUrl: './produtora.page.html',
   styleUrls: ['./produtora.page.scss'],
})
export class ProdutoraPage implements OnInit {

   public produtoras: Produtora[];

   constructor(private produtoraService: ProdutoraService,
               private router: Router) { }

   ngOnInit() {
      this.findAll();

      this.router.events.pipe(
         filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
         this.findAll();
      });
   }

   public findAll(): void {
      this.produtoraService.findAll().subscribe(e => this.produtoras = e);
   }

   public edit(id: number): void {
      this.router.navigate([`/produtora/${id}`]);
   }

   public delete(id: number): void {
      this.produtoraService.delete(id).subscribe(() => {
         this.findAll();
      });
   }

}
