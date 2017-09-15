function getProductsOfAllIntsExceptAtIndex(dataProvider){

	var tempIndexHolder = 0;
  var tempDataHolder = 1;
  var finalArray = [];
  var lengthOfAnArray = dataProvider.length;
  
  for(var j = 0; j < lengthOfAnArray; j++){
  	
		for(var i = 0; i < dataProvider.length; i++){
    	
    	tempIndexHolder = j;
      
  		if(tempIndexHolder != i){
    		tempDataHolder *= dataProvider[i];
    	}
  	}
    finalArray.push(tempDataHolder);
    tempDataHolder = 1;
  }
	return finalArray;
}

var dataProvider = [5, 10, 2, 9, 10];

console.log(getProductsOfAllIntsExceptAtIndex(dataProvider));