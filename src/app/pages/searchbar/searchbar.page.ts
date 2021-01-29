import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
textobuscar ='';
  albumes: any[] = [];
  constructor( private DataService : DataService ) { }

  ngOnInit() {
    this.DataService.getAlbumes().subscribe( albumes => {
      console.log(albumes);
      this.albumes = albumes;
    } );
  }
  buscar(event){
    this.textobuscar = event.detail.value;
  }
}
