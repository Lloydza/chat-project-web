import moment from 'moment';

const Utilities = {
  getFormattedTimestamp: (dateString) => {
    const timestampString = moment(dateString).fromNow();
    if (timestampString.toLowerCase() === 'in a few seconds') {
      return 'a few seconds ago';
    }

    return timestampString;
  },
};

module.exports = Utilities;
