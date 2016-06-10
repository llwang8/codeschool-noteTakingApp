/*
angular.module('NoteWrangler')
.factory('User', ['$resource', function($resource){
    return $resource('/users/:id', {}, {});
}]);
*/

angular.module('NoteWrangler')
.factory('User', function($resource){
    return $resource('/users/:id', {});
});



