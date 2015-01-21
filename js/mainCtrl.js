var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, mainService){
	$scope.getData = function() {
    $scope.quotes = mainService.getData();
    
  }

    $scope.getData();
    $scope.addData = function(newData, author) {
    
    mainService.addData({text: newData, author: author});
   	 $scope.showInputField = function() {
        return true;
    }
        }
    $scope.removeData = function(dataToRemove){
    	mainService.removeData(dataToRemove);
        $scope.showInputField1 = function() {
        return true;
    }
    }
    $scope.filterDataButton = function(filterDataButton1) {
        return true;
        
    }
  
    

});
