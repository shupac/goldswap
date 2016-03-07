export default function UploadFactory($http) {
    'ngInject'

    function getSignedRequest(file) {
        return $http
            .get('/sign_s3?file_name=' + file.name + '&file_type' + file.type)
            .then(function(response) {
                if (response.status === 200) return uploadFile(file, response.data.signed_request, response.data.url);
            });
    }

    function get_signed_request(file){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/sign_s3?file_name="+file.name+"&file_type="+file.type);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    var response = JSON.parse(xhr.responseText);
                    uploadFile(file, response.signed_request, response.url);
                }
                else{
                    alert("Could not get signed URL.");
                }
            }
        };
        xhr.send();
    }

    function uploadFile(file, signedRequest, url) {
        console.log(signedRequest);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(e) {
            if (this.readyState === 4) {
                debugger
            }
        };
        xhr.open('PUT', signedRequest, true);
        // xhr.setRequestHeader('Content-Type',"application/octet-stream");
        xhr.send(file);
    }

    return {
        upload: get_signed_request
    };
};
