export default function(firebaseFactory, $firebaseArray) {
    var tracks = $firebaseArray(firebaseFactory.child('tracks'));

    return tracks;
};
