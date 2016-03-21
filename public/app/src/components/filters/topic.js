export default function(tracksFactory) {
    'ngInject'

    function topicFilter(trackId) {
        return tracksFactory.$getRecord(trackId).title;
    }
    return topicFilter;
};
