/**
 * @ngdoc function
 * @name ikya.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * @author Ashish Mishra <ashish.mishra@nanobianalytics.com>
 * Controller of the ikya used in view state
 */
angular.module('ikya.controllers')
  .controller('ViewCtrl', [ '$scope','$rootScope', 'Properties','Settings', 'ViewService', '$timeout', '$state', '$log', '$http','$q','$sce',function ($scope, $rootScope,Properties, Settings, ViewService, $timeout, $state, $log,$http,$q,$sce) {
  	'use strict';

    $scope.shrinkVal = 150;
    $http({method: 'GET', url: 'http://localhost:3002/data.json'}).success(function(data, status, headers, config) {
        $scope.list = data['event_list'];
    });

}]);