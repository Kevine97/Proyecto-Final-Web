import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }
  Carga(archivos:String[]){
  for (let archvivo of archivos) {
    let script = document.createElement("script");
    script.src = "./assets/js/"+archvivo +".js";
    let body = document.getElementsByTagName("body")[0]
    body.appendChild(script);
  }
  }
}


