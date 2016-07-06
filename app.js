var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
	$scope.questions = [{"name":"sum","question":"Сколько будет 2+2","type":"radio","variants":[2,4,6]},{"name":"multiply","question":"Сколько будет 3*3","type":"radio","variants":[3,6,9]},{"name":"crocodile","question":"Крокодил:","type":"checkbox","variants":["зеленый","квадратный","млекопитающее","хладнокровное"]},{"name":"surname","question":"Фамилия","type":"text"},{"name":"name","question":"Имя","type":"text"},{"name":"group","question":"Группа","type":"text"}];
	$scope.currentState = 0;
	$scope.answers=[];
	$scope.Next = function() {
        if($scope.currentState<$scope.questions.length-1){
        	$scope.currentState++;
        }
        else{

        }
    };
}]);