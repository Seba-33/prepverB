import { Component, Input } from '@angular/core';
import { Vegetali } from '../Models/vegetables.model';
import { CartProduct } from '../Models/cartproduct.model';


@Component({
  selector: 'app-vegetable-list',
  standalone: true,
  imports: [],
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  @Input() verdura! : Vegetali
  @Input() cartPr! : CartProduct[]
  

  aggiungi(nProd: HTMLInputElement){
    this.cartPr.push(new CartProduct(this.verdura.nome,this.verdura.descrizione,this.verdura.prezzo,nProd.value))
    console.log(this.cartPr)
    
  }
}
