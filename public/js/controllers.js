



(function (angular) {
  'use strict';

  var app = angular.module('appAdd', []);

    	app.controller('selectControllerPm', function ($scope) {
            $scope.mycity = '张三';
            $scope.Cities = [{ id: 1, name: '李四' }, { id: 2, name: '王五' }, { id: 3, name: '张三' }];
        });
        app.controller('selectControllerInteractive', function ($scope) {
            $scope.mycity = 'aster';
            $scope.Cities = [{ id: 1, name: 'aster' }, { id: 2, name: 'niko' }, { id: 3, name: 'tang' }];
        });
        app.controller('selectControllerDesign', function ($scope) {
            $scope.mycity = 'gaby';
            $scope.Cities = [{ id: 1, name: 'gaby' }, { id: 2, name: 'zhiyi' }, { id: 3, name: '庐山' }];
        });
        app.controller('selectControllerUi', function ($scope) {
            $scope.mycity = 'alisa';
            $scope.Cities = [{ id: 1, name: 'huzeng' }, { id: 2, name: 'wenjun' }, { id: 3, name: 'alisa' }];
        });

        
   
}(angular));





