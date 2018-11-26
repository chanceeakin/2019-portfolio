export default {
  name: 'Technologies',
  image: 'tech',
  blurb: '',
  children: [
    {
      name: 'Databases',
      image: 'databases',
      children: [
        {
          name: 'MySQL',
          image: 'mysql',
          size: 4500,
        },
        {
          name: 'PostGRES',
          image: 'postgres',
          size: 1500,
        },
        {
          name: 'MongoDB',
          image: 'mongoDB',
          size: 3500,
        },
        {
          name: 'Cassandra/Scylla',
          image: 'scylla',
          size: 6500,
        },
      ],
    },
    {
      name: 'Languages',
      image: 'languages',
      children: [
        {
          name: 'Javascript',
          image: 'js',
          children: [
            { name: 'D3', image: 'd3', size: 3000 },
            { name: 'React', image: 'react', size: 10000 },
            { name: 'Redux', image: 'redux', size: 6714 },
            { name: '@vx', image: 'vx', size: 743 },
            { name: 'Webpack', image: 'webpack', size: 5400 },
            { name: 'Babel', image: 'babel', size: 3200 },
            { name: 'React Spring', image: 'react', size: 4200 },
            { name: 'Graphql', image: 'graphql', size: 7200 },
            { name: 'Node.js', image: 'node', size: 12000 },
          ],
        },
        {
          name: 'Golang',
          image: 'golang',
          children: [
            { name: 'GoCV', image: 'gocv', size: 3534 },
            { name: 'Gorilla Mux', image: 'gorilla', size: 3416 },
          ],
        },
        {
          name: 'Python',
          image: 'python',
          children: [
            {
              name: 'Computer Vision',
              image: 'opencv',
              size: 1350,
            },
            {
              name: 'NumPy',
              image: 'numpy',
              size: 450,
            },
            {
              name: 'Flask',
              image: 'flask',
              size: 450,
            },
          ],
        },
        {
          name: 'C/C++',
          image: 'c',
          size: 1150,
        },
      ],
    },
    {
      name: 'Devops',
      image: 'devops',
      children: [
        { name: 'Docker', image: 'docker', size: 7010 },
        { name: 'Kubernetes', image: 'kubernetes', size: 1842 },
        {
          name: 'Cloud Platforms',
          image: 'cloud',
          children: [{ name: 'AWS', size: 750 }, { name: 'GCP', size: 4200 }, { name: 'Digital Ocean', size: 7800 }],
        },
        { name: 'Linux', size: 6500 },
      ],
    },
    {
      name: 'AI/ML',
      image: 'ai',
      size: 1200,
    },
  ],
};
