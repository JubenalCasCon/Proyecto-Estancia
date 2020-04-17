import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
   
  public nombre:string;
  public disponible:boolean = false;
  public css_classes:string[] = ['bg-red-400','border-solid','border-2','border-black'];
  public launchdate:Date;
  public isAvailable:boolean=false;


  constructor() { 
  
  
 this.nombre ='Jubenal';
  
    setTimeout(()=>this.nombre = 'Jubenal Castaneda', 3000)
    setTimeout(()=>this.disponible = true , 3000 )
    setTimeout(()=>this.css_classes =['bg-blue-400'],3000)
    this.launchdate=new Date(2020,3,27);
   

  }


  
  

 


  ngOnInit() {

   
   
   
  }

}
