// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'sanuththrimanna', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['dfanso/MatLab_Coursework'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'DFanso/QuickQuest',
          'DFanso/cine-magic-cinema',
          'DFanso/B2B_Portal',
          'DFanso/spring-boot-jwt-auth-api',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Quick Quest',
          description:
            'A platform connecting customers with laborers based on location and service needs. It uses MongoDB for geospatial queries and SSE for real-time chat. Technologies: Nest.js, Next.js, Python, MongoDB, Docker, AWS, PayPal.',
          imageUrl:
            'https://dfanso.s3.ap-southeast-1.amazonaws.com/Frame+1474.ico',
          link: 'DFanso/QuickQuest',
        },
        {
          title: 'Science Camps',
          description:
            'Conducted science camps in 12 schools under PacBio pharmaceuticals pvt.',
          imageUrl:
            'https://th.bing.com/th/id/R.3076d57d9b34d0a39e337ea0bf411519?rik=tSzulKSckw4EHQ&pid=ImgRaw&r=0',
        },
        {
          title: 'Astronomy Camps',
          description:
            'Conducted Astronomy camps in 12 schools under Astronex org.',
          imageUrl:
            'https://cdn.miswag.me/images/images/miswag_0q9KAM.jpeg',
        },


      ],
    },
  },
  seo: {
    title: 'Portfolio of Sanuth Thrimanna',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+94761904364',
    email: 'hs24510215@my.sliit.lk',
  },
  resume: {
    fileUrl: 'https://drive.google.com/uc?export=download&id=1uPxVqQnr4rFd2dfQ0Bsh_eGiFgYC4r3i', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Astronomy',
    'Impromptu speech',
    'Event management',
    'Teaching',
    'Archery',
    'Swimming',
    'Driving',
    'Chess',
    'Listen to music',
    'Hunting',
    'Partying',
  ],
  experiences: [
    {
      company: 'PacBio pharmaceuticals',
      position: 'Assistant technician',
      from: 'May 2023',
      to: '2024',
      companyLink: '',
    },
    {
      company: 'Astronex org',
      position: 'Executive Director',
      from: 'May 2022',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Dhammissara National College',
      degree: 'G.C.E. Ordinary Level exam',
      from: '2018',
      to: '2019',
    },
    {
      institution: 'Dhammissara National College',
      degree: 'G.C.E. Advance Level exam',
      from: '2020',
      to: '2023',
    },
    {
      institution: 'SLIIT',
      degree: 'B.SC (Hons) Biotachnology',
      from: '2024',
      to: '2028',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
