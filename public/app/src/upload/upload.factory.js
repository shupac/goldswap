export default function UploadFactory($http, $q) {
    'ngInject'

    function getSignedRequest(file) {
        var deferred = $q.defer();
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/sign_s3?file_name="+file.name+"&file_type="+file.type);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    deferred.resolve({
                        file: file,
                        signedReq: response.signed_request,
                        url: response.url
                    });
                }
                else {
                    deferred.reject('Could not get signed URL.');
                }
            }
        };
        xhr.send();
        return deferred.promise;
    }

    function uploadFile(data) {
        var deferred = $q.defer();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(e) {
            if (this.readyState === 4) {
                if (xhr.status === 200) deferred.resolve(data.url);
                else deferred.reject();
            }
        };
        xhr.open('PUT', data.signedReq, true);
        xhr.send(data.file);
        return deferred.promise;
    }

    function upload(file) {
        return getSignedRequest(file).then(uploadFile);
    }

    return {
        upload
    };
};
