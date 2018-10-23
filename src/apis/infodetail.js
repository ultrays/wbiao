import {INFODETAIL} from "../commons/commons"
export class InfoDetail {
  static catch(cb){
    fetch(INFODETAIL).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }
}
