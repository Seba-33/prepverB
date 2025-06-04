import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { Vegetali } from './Models/vegetables.model';
import { HttpClient } from '@angular/common/http';
import { CartProduct } from './Models/cartproduct.model';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,VegetableListComponent,DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'prep';
  loading! : boolean
  obs! : Observable<Vegetali[]>
  http: HttpClient
  vettVerd : Vegetali[] = []
  vettCart : CartProduct[] = []

  constructor(http : HttpClient){this.http = http}

  makechiamata(){
    this.loading = true
    this.obs = this.http.get<Vegetali[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/verdure')
    this.obs.subscribe(this.getData)

  }

  getData = (d : Vegetali[]) => {
    this.vettVerd = d
    this.loading = false
    console.log(this.vettVerd)
  }

  ngOnInit(): void {
    this.makechiamata()
  }


}
