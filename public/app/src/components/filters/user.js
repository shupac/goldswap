export default function($http, FIREBASE_URL) {
    var cache = {};
    var token = JSON.parse(localStorage['firebase:session::goldswap']).token;

    function userFilter(userId) {
        if (!userId) return;
        if (userId in cache) {
            return cache[userId].then !== 'function' ? cache[userId] : undefined;
        }
        else {
            cache[userId] = $http({
                method: 'GET',
                url: FIREBASE_URL + '/users/' + userId + '.json?auth=' + JSON.parse(localStorage['firebase:session::goldswap']).token
            }).then(function(res) {
                cache[userId] = res.data.name;
            });
        }
    }
    userFilter.$stateful = true;
    return userFilter;
};
