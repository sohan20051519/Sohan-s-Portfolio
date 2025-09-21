import certificates from '../data/certificates.json';

export const Certificate = {
  list: async (sort) => {
    // Basic sorting, assuming sort is a string like '-date_issued'
    if (sort) {
      const [order, field] = sort.startsWith('-') ? ['desc', sort.substring(1)] : ['asc', sort];
      return [...certificates].sort((a, b) => {
        if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
        if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return certificates;
  },
};
