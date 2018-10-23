import {PROductDetail} from "../commons/commons"
export class ProductDetail {
  static getCat(id,cb){
    fetch(PROductDetail + id).then(response=>{
      if(response.ok){
        response.json().then(data=>{
          // console.log(data)
          cb(data)
        })
      }

    })
  }
}

