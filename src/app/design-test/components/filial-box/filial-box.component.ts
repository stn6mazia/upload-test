import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filial-box',
  templateUrl: './filial-box.component.html',
  styleUrls: ['./filial-box.component.scss']
})
export class FilialBoxComponent implements OnInit {

  filialName:string = 'FILIAL'

  constructor() { }

  ngOnInit() {
  }

}
