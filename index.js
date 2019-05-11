var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  recipes[key] = value
  return recipes
}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, recipes, { [key]: value })
  return newObj

}

function updateObjectWithKeyAndValue(object, key, value){
   recipes[key] = value
   return recipes
}



function destructivelyDeleteFromObjectByKey(object, key,){
  delete recipes[key]
  return recipes
}
