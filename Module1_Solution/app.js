(function() {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.inputValue = "";
    $scope.message = "";

    $scope.check = function(){
      var values = [];
      if($scope.inputValue === ""){
        $scope.message = "Please enter data first";
      }else{
        values = $scope.inputValue.split(",");
        if(values.length <= 3){
          $scope.message = "Enjoy!";
        }else if(values.length > 3){
          $scope.message = "Too much!";
        }
      }
    };
    
  }
})();
