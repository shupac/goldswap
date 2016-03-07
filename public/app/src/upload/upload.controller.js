function UploadController($scope, uploadFactory) {
    'ngInject'

    $scope.submit = function() {
        uploadFactory.upload($scope.file);
    }
}

export default UploadController;
