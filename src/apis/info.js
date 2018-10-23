import {INFO} from "../commons/commons"
export class Info {
  static catch(cb){
    fetch(INFO).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }
}
