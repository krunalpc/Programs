function getProductsOfAllIntsExceptAtIndex(intArray){

	if (intArray.length < 2) {
        throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
  }

	var productsOfAllIntsExceptAtIndex = [];

	var productSoFar = 1;
  for (var i = 0; i < intArray.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    productSoFar *= intArray[i];
  }
  
  console.log(" After the first loop "+ productsOfAllIntsExceptAtIndex);

	productSoFar = 1;
  for (var j = intArray.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productSoFar;
    productSoFar *= intArray[j];
  }
  
  console.log(" After the second loop "+ productsOfAllIntsExceptAtIndex);
  
  return productsOfAllIntsExceptAtIndex;

}

var intArray = [2, 5, 9];

console.log(getProductsOfAllIntsExceptAtIndex(intArray));
