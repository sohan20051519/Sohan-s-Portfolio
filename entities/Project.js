import projects from '../data/projects.json';

export const Project = {
  list: async (sort) => {
    // Basic sorting, assuming sort is a string like '-created_date'
    if (sort) {
      const [order, field] = sort.startsWith('-') ? ['desc', sort.substring(1)] : ['asc', sort];
      return [...projects].sort((a, b) => {
        if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
        if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return projects;
  },
};
