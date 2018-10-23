import {PRODUCTLIST} from "../commons/commons"
export class productList{
  static getCat(id,cb) {
    fetch(PRODUCTLIST + id).then(response=>{
      if(response.ok){
        response.json().then(data => {
          console.log(data)
          cb(data)
        })
      }
    })
  }
}

