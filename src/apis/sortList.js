import {SORTLIST} from "../commion/commions"
export class sortList{
  static getCat(id,cb) {
    fetch(SORTLIST + id).then(response=>{
      if(response.ok){
        response.json().then(data => {
          console.log(data)
          cb(data)
        })
      }
    })
  }
}

