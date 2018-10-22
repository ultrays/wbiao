import {CARTS} from "../commion/commions"
export class carts {
  static getCat(cb){
    fetch(CARTS).then(response=>{
      response.json().then(data=>{
        console.log(data)
        cb(data)
      })
    })
  }
}

