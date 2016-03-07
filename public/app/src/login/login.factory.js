function LoginFactory() {
    'ngInject'

    var userId = null;

    function getUser() {
        return userId;
    }

    function authenticate() {
        console.log('authenticate');
    }

    return {
        authenticate,
        getUser
    };
}

export default LoginFactory;
