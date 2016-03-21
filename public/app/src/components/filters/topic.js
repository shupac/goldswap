export default function(tracksFactory) {
    function topicFilter(trackId) {
        return tracksFactory.$getRecord(trackId).title;
    }
    return topicFilter;
};
