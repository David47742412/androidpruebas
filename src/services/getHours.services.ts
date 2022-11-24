import { Injectable } from "@nestjs/common";


@Injectable()
export class UtilityService {

  public obtenerfechaactual() {
    const date = new Date(Date.now());
    let year, month, day ,horas,minutos,segundos;
    year = String(date.getFullYear());
    month = String(date.getMonth() + 1);
    if (month.length == 1) {
      month = "0" + month;
    }
    day = String(date.getDate());
    if (day.length == 1) {
      day = "0" + day;
    }
    horas = String(date.getHours() )
    if(horas.length == 1) {
      horas = "0" + horas;
    }
    minutos = String(date.getMinutes() )
    if(minutos.length == 1) {
      minutos = "0" + minutos;
    }
    segundos = String(date.getSeconds());
    if(segundos.length == 1){
      segundos = "0" + segundos;
    }
    return year + "-" + month + "-" + day + " " + horas + ":" + minutos + ":" + segundos;

  }

}