export default function() {
    'ngInject'

    var track;
    return {
        loadTrack: function(newTrack) {
            // console.log('load', newTrack);
            track = newTrack;
        },
        getTrack: function() {
            return track;
        }
    };
};
