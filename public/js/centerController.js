/**
 * Created by Rube on 15/2/15.
 */
function app($scope, $http) {
  $scope.load = function () {
    $scope.data = {};
    $http.get('/api').success(function (data, status) {
      $scope.data = data;
      $scope.data.data.reverse();
    }).error(function (data, status) {
      window.location = '/public/login.html';
    });
  }
}

function operaController($scope, $http) {
  $scope.api = {
    name1: 'Function',
    name2: 'Description',
    doc1: '',
    doc2: ''
  };
  $scope.dataSelect = {};
  $scope.submitInfo = '';
  $scope.index = function (target) {
    activeChange(target);
    $('#info_index_block').attr('class', 'show');
  };
  $scope.add = function (target) {
    activeChange(target);
    $('#info_add_block').attr('class', 'show');
  };
  $scope.detail = function (target, d) {
    activeChange(document.getElementById('info_nav_detail'));
    $scope.dataSelect = d;
    $('#info_detail_block').attr('class', 'show');
  };

  $scope.addInfo = function () {
    var data = {
      doc: [{name: $scope.api.name1, doc: $scope.api.doc1}, {name: $scope.api.name2, doc: $scope.api.doc2}],
      apiContent: [{name: 'API_Address', api: ''}, {name: 'API_Content', api: ''}, {name: 'API_Owner', api: ''}]
    };
    $http.post('/api/post', data).success(function (data, status) {
      window.location = '/public/apicenter.html';
    }).error(function (data, status) {
      alert('Error');
    });
  };
  $scope.delInfo = function (_id) {
    var data = {id: _id};
    $http.post('/api/delete', data).success(function (data, status) {
      window.location = '/public/apicenter.html';
    }).error(function (data, status) {
      alert('Error');
    });
  };
  $scope.updateInfo = function () {
    var data = {
      id: $scope.dataSelect._id, api: [{name: 'API_Address', api: $('#api_1').val()},
        {name: 'API_Content', api: $('#api_2').val()},
        {name: 'API_Owner', api: $('#api_3').val()}],
      doc: [{name: 'Function', doc: $('#doc_1').val()},
        {name: 'Description', doc: $('#doc_2').val()}]
    };
    $http.post('/api/update', data).success(function (data, status) {
      alert('Successful');
      window.location = '/public/apicenter.html';
    }).error(function (data, status) {
      alert('Error');
    });
  }
}

function activeChange(target) {
  var parent = angular.element(target).parent();
  parent.parent().children('.active').attr('class', '');
  parent.attr('class', 'active');
  $('#info_block_collection').children('.show').attr("class", "hide");
}
