import {SORT} from "../commons/commons"
export class sort {
  static getCat(cb) {
    fetch(SORT).then(response => {
      response.json().then(data => {
        // console.log(data)
        cb(data)
      })
    })
  }
}

