const movies = require('./../marvel.json');
const marvel = new Map( Object.entries( movies ) )

let map2 = 0
let map3 = 0

marvel.forEach( (v,k) =>{
  map2 = new Map( Object.entries( v ) )
}  )

module.exports.marvel = map2