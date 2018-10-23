import {INFOLIST} from "../commons/commons"
export class InfoList {
  static catch(cb){
    fetch(INFOLIST).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }
}
