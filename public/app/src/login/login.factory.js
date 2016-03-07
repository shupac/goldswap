import Firebase from 'firebase';

function LoginFactory(FIREBASE_URL, $q) {
    'ngInject'

    var fbRef = new Firebase(FIREBASE_URL);
    var userId = null;

    fbRef.onAuth(authDataCallback);

    function getUser() {
        return userId;
    }

    function authDataCallback(authData) {
        if (authData) {
            console.log("User " + authData.uid + " is logged in with " + authData.provider);
            userId = authData.uid;
            fbRef.child('users').once('value', function(snapshot) {
                if (snapshot.child(authData.uid).exists()) {
                    userId = authData.uid;
                }
            });
        } else {
            console.log("User is logged out");
        }
    }

    function login(inviteToken) {
        var deferred = $q.defer();
        fbRef.authWithOAuthPopup('google', function(error, authData) {
            if (error) {
                console.log('Login Failed!', error);
            } else {
                console.log('Authenticated successfully:', authData);
                fbRef.child('users').once('value', function(snapshot) {
                    if (snapshot.child(authData.uid).exists()) {
                        userId = authData.uid;
                        deferred.resolve();
                    }
                    else if (inviteToken) {
                        signup(inviteToken).then(function() {
                            userId = authData.uid;
                            createUser(authData).then(deferred.resolve);
                        }, function() {
                            deferred.reject();
                        });
                    }
                    else deferred.reject();
                });
            }
        }, {
            scope: 'email'
        });
        return deferred.promise;
    }

    function signup(token) {
        var deferred = $q.defer();
        fbRef.child('invites').once('value', function(snapshot) {
            var data = snapshot.val();
            if (snapshot.child(token).exists()) {
                console.log('signup authorized');
                deferred.resolve();
            }
            else {
                console.log('signup not authorized');
                deferred.reject();
            }
        });
        return deferred.promise;
    }

    function createUser(authData) {
        var deferred = $q.defer();
        fbRef.child('users').child(authData.uid).set({
            email: authData.google.email,
            name: authData.google.displayName,
            avatar: authData.google.profileImageURL
        }, function(err) {
            deferred.resolve;
        });
        return deferred.promise;
    }

    function logout() {
        fbRef.unauth();
    }

    return {
        login,
        logout,
        signup,
        getUser
    };
}

export default LoginFactory;
