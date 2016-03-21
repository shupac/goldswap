export default function(firebaseFactory, $firebaseArray) {
    'ngInject'

    var tracks = $firebaseArray(firebaseFactory.child('tracks'));

    return tracks;
};
