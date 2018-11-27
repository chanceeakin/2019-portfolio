export default {
  name: 'Technologies',
  image: 'tech',
  blurb:
    "A collection of tech I've worked with. The attached chart is a collection a bunch of stuff I either regularly use or I sometimes tinker with, accompanied by how I weight their usage as a percentage of my active development time. I built this chart using several pieces of technology mentioned here-in.",
  children: [
    {
      name: 'Databases',
      image: 'databases',
      blurb:
        "I've spent more of my time building performant client-side code, but that doesn't meant that I don't spend time in database land",
      children: [
        {
          name: 'MySQL',
          image: 'mysql',
          blurb: 'We all start somewhere.',
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
          blurb: 'My go to for lazily spooling up personal projects',
          size: 3500,
        },
        {
          name: 'Cassandra/Scylla',
          image: 'scylla',
          blurb:
            'In a previous life, I designed a system needing to ingest far more data than it needed to put out. This NoSQL DB was the obvious, performant choice for our needs at the time',
          size: 6500,
        },
      ],
    },
    {
      name: 'Languages',
      image: 'languages',
      blurb: 'Collection of languages I spend most of my time writing. Some are more Turing complete than others',
      children: [
        {
          name: 'Javascript',
          image: 'js',
          blurb: 'Where I spend the bulk of my mustachioed time',
          children: [
            {
              name: 'D3',
              image: 'd3',
              blurb:
                'I started writing data visualizations in 2017, and I really enjoy the challenge of building performant, captivating graphical displays. Still a novice, but growing every day.',
              size: 3000,
            },
            { name: 'React', image: 'react', blurb: 'Oh yeah. Since 0.13.x', size: 10000 },
            {
              name: 'Redux',
              image: 'redux',
              blurb: 'Juggling 3 different definitions of the word "state" never seemed so awful and wonderful.',
              size: 6714,
            },
            {
              name: '@vx',
              image: 'vx',
              blurb:
                'D3 likes to manipulate the DOM directly. So does React. @vx makes the two place nice with each other. This page was built with several VX components.',
              size: 743,
            },
            {
              name: 'Webpack',
              image: 'webpack',
              blurb:
                'Now that React 16.6 ships with those async modules and react-app is really customizeable without ejecting, learning this almost feels like a waste. Almost. ',
              size: 5400,
            },
            {
              name: 'Babel',
              image: 'babel',
              blurb: "For while they're dragging their feet on adding pythonic decorators into the class syntax spec",
              size: 3200,
            },
            {
              name: 'React Spring',
              image: 'react',
              blurb:
                'Just joined the community there in maintaining the project! Using this portfolio build to get a better sense of what the lib is capable of. Really impressed with how well built the lib is, and looking forward to contributing a lot more in the future.',
              size: 4200,
            },
            {
              name: 'Graphql',
              image: 'graphql',
              blurb: 'I just really like graphql, though I am TBD on the Apollo offerings built on top of this spec.',
              size: 7200,
            },
            { name: 'Node.js', image: 'node', blurb: 'Heck yes Node.js.', size: 12000 },
          ],
        },
        {
          name: 'Golang',
          image: 'golang',
          blurb: 'Really like building personal servers in Go. It is my fun language of choice.',
          children: [
            {
              name: 'GoCV',
              image: 'gocv',
              blurb: 'OpenCV bindings for GoLang! Built a Slackbot with this',
              size: 3534,
            },
            {
              name: 'Gorilla Mux',
              image: 'gorilla',
              blurb: "Don't know why they just haven't pulled this into the stdlib yet",
              size: 3416,
            },
          ],
        },
        {
          name: 'Python',
          image: 'python',
          blurb: 'I just want to build Skynet',
          children: [
            {
              name: 'Computer Vision',
              image: 'opencv',
              blurb: 'Built a face detecting Raspberry Pi',
              size: 1350,
            },
            {
              name: 'NumPy',
              image: 'numpy',
              blurb: 'Crashed through making dynamically rendered SVGs of telemetry data',
              size: 450,
            },
            {
              name: 'Flask',
              image: 'flask',
              blurb: 'Prefer other tools over this one, but it does the job if I need a server in Python',
              size: 450,
            },
          ],
        },
        {
          name: 'C/C++',
          image: 'c',
          blurb: 'Because we must all form the Tsaheylu with our computers at some point',
          size: 1150,
        },
      ],
    },
    {
      name: 'Devops',
      image: 'devops',
      blurb: 'I sometimes deploy my own apps, and it helps to be able to actually deploy them',
      children: [
        {
          name: 'Docker',
          image: 'docker',
          blurb: "Use it, love it. Don't need it for 99% of the things I build.",
          size: 7010,
        },
        {
          name: 'Kubernetes',
          image: 'kubernetes',
          blurb: "Same as Docker. Use it. Love it. Don't really need it in my day to day.",
          size: 1842,
        },
        {
          name: 'Nginx',
          image: 'nginx',
          blurb: "Mostly a load balancer for my stuff, but I've used it as a CDN/static asset server on occasion.",
          size: 1842,
        },
      ],
    },
    {
      name: 'AI/ML',
      image: 'ai',
      blurb: 'Starting to investigate Tensorflow and Natural Language Processing',
      size: 1200,
    },
  ],
};
