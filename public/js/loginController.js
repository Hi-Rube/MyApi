/**
 * Created by Rube on 15/2/15.
 */
function loginController($scope, $http) {
  $scope.admin = {
    username: '',
    password: ''
  };
  $scope.login = function () {
    var data = {'username': $scope.admin.username, 'password': $scope.admin.password};
    $http.post('/login', data).success(function (data, status) {
      window.location = "/public/apicenter.html";
    }).error(function (data, status) {
    });
  };
}