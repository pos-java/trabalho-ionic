import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud.service';
import { Produtora } from '../model/produtora';


@Injectable({
  providedIn: 'root'
})
export class ProdutoraService extends CrudService<Produtora, number> {

   constructor(http: HttpClient) {
     super(environment.api_serie + '/produtora', http);
   }
 
}
