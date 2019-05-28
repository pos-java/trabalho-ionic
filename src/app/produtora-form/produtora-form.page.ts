import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Produtora } from '../model/produtora';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneroService } from '../service/genero.service';

@Component({
   selector: 'app-produtora-form',
   templateUrl: './produtora-form.page.html',
   styleUrls: ['./produtora-form.page.scss'],
})
export class ProdutoraFormPage implements OnInit {

   public crudForm: FormGroup;
   public produtora: Produtora;

   constructor(private route: ActivatedRoute,
      private router: Router,
      private formBuilder: FormBuilder,
      private generoService: GeneroService) {

      debugger;   
      this.crudForm = this.formBuilder.group({
         nome: [null, Validators.required]
      });
   }

   ngOnInit() {
      this.produtora = new Produtora();

      const id = Number(this.route.snapshot.params.id);

      if (id) {
         this.generoService.findOne(id).subscribe(e => this.produtora = e);
      }
   }

   save() {
      this.generoService.save(this.produtora).subscribe(() => {
         this.router.navigate(['/produtora']);
      });
   }
}
