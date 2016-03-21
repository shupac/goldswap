import Firebase from 'firebase';

function LoginFactory(firebaseFactory, $q, $rootScope) {
    'ngInject'

    var userId;
    var userInfo;

    firebaseFactory.onAuth(authDataCallback);

    function getUser() {
        return userId;
    }

    function getUserInfo() {
        return userInfo;
    }

    function authDataCallback(authData) {
        if (authData) {
            // console.log('User ' + authData.uid + ' is logged in with ' + authData.provider);
            userId = authData.uid;
            userInfo = authData.google;
            firebaseFactory.child('users').once('value', function(snapshot) {
                if (snapshot.child(authData.uid).exists()) {
                    $rootScope.$apply(function() {
                        userId = authData.uid;
                        userInfo = snapshot.val()[userId];
                    });
                }
            });
        } else {
            console.log('User is logged out');
            userId = null;
        }
    }

    function login(inviteToken) {
        var deferred = $q.defer();
        firebaseFactory.authWithOAuthPopup('google', function(error, authData) {
            if (error) {
                console.log('Login Failed!', error);
            } else {
                console.log('Authenticated successfully:', authData);
                firebaseFactory.child('users').once('value', function(snapshot) {
                    if (snapshot.child(authData.uid).exists()) {
                        userId = authData.uid;
                        deferred.resolve();
                    }
                    else if (inviteToken) {
                        signup(inviteToken, authData.google.email).then(function() {
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

    function signup(token, email) {
        var deferred = $q.defer();
        firebaseFactory.child('invites').child(token).once('value', function(snapshot) {
            if (snapshot.val() === email) {
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
        firebaseFactory.child('users').child(authData.uid).set({
            email: authData.google.email,
            name: authData.google.displayName,
            avatar: authData.google.profileImageURL
        }, function(err) {
            deferred.resolve();
        });
        return deferred.promise;
    }

    function saveInfo() {
        var deferred = $q.defer();
        firebaseFactory.child('users').child(userId).set(userInfo, deferred.resolve);
        return deferred.promise;
    }

    function logout() {
        var deferred = $q.defer();
        firebaseFactory.unauth(deferred.resolve);
        return deferred.promise;
    }

    return {
        login,
        logout,
        signup,
        getUser,
        getUserInfo,
        saveInfo
    };
}

export default LoginFactory;
