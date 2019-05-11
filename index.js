var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object

}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, recipes, { [key]: value })
  return newObj

}

function updateObjectWithKeyAndValue(object, key, value){
  return object[key] = value

}



function destructivelyDeleteFromObjectByKey(object, key,){
  delete recipes[key]
  return recipes
}
