import {PROductDetail} from "../commion/commions"
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

