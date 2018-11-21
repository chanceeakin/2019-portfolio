export default {
  name: 'tech',
  children: [
    {
      name: 'Databases',
      children: [
        {
          name: 'MySQL',
          size: 4500,
        },
        {
          name: 'PostGRES',
          size: 1500,
        },
        {
          name: 'MongoDB',
          size: 3500,
        },
        {
          name: 'Cassandra/Scylla',
          size: 6500,
        },
      ],
    },
    {
      name: 'Languages',
      children: [
        {
          name: 'Javascript',
          children: [
            { name: 'D3', size: 3000 },
            { name: 'React', size: 10000 },
            { name: 'Redux', size: 6714 },
            { name: '@vx', size: 743 },
            { name: 'Webpack', size: 5400 },
            { name: 'Babel', size: 3200 },
            { name: 'React Spring', size: 4200 },
            { name: 'Graphql', size: 7200 },
            { name: 'Node.js', size: 12000 },
          ],
        },
        {
          name: 'Golang',
          children: [{ name: 'GoCV', size: 3534 }, { name: 'Gorilla Mux', size: 3416 }],
        },
        {
          name: 'Python',
          children: [
            {
              name: 'Computer Vision',
              children: [
                {
                  name: 'Facial Recognition',
                  size: 850,
                },
                {
                  name: 'Image manipulation',
                  size: 500,
                },
              ],
            },
            {
              name: 'NumPy',
              size: 450,
            },
            {
              name: 'Flask',
              size: 450,
            },
          ],
        },
        {
          name: 'C/C++',
          size: 1150,
        },
      ],
    },
    {
      name: 'Devops',
      children: [
        { name: 'Docker', size: 7010 },
        { name: 'Kubernetes', size: 1842 },
        {
          name: 'Cloud Platforms',
          children: [{ name: 'AWS', size: 750 }, { name: 'GCP', size: 4200 }, { name: 'Digital Ocean', size: 7800 }],
        },
        { name: 'Linux', size: 6500 },
      ],
    },
    {
      name: 'AI/ML',
      size: 1200,
    },
  ],
};
