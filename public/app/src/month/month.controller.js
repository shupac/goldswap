import moment from 'moment';

function MonthController($scope, $state, $stateParams, $filter, tracksFactory) {
    'ngInject'

    var month = moment($stateParams.month, "YYYY-MM");
    $scope.month = $stateParams.month;
    $scope.displayMonth = month.format('MMMM YYYY');
    $scope.tracks = tracksFactory;

    $scope.upload = function() {
        $state.go('upload', { month: $scope.month });
    };
}

export default MonthController;
