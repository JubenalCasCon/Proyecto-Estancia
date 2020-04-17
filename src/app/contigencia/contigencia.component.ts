import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contigencia',
  templateUrl: './contigencia.component.html',
  styleUrls: ['./contigencia.component.css']
})


export class ContigenciaComponent implements OnInit {
  public launchdate:Date;
  public isAvailable:boolean=false;
  hours:number;
  minutes:number;
  seconds:number;

  constructor() { }

  ngOnInit() {
    this.launchdate=new Date(2020,2,27);
    setInterval(()=>{
      let d = new Date();
      this.hours = d.getHours();
      this.minutes = d.getMinutes();
      this.seconds = d.getSeconds();

    },1000);
  }

}
