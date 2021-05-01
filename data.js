const data = {
  fullName: 'Raikel Bordón López',
  email: 'raikelbl@gmail.com',
  birthDate: '14/08/1988',
  address: 'Zacatecas, México',
  location: 'https://www.google.com/maps/@22.7747798,-102.5858141,14z',
  website: 'https://raikel.github.io/portfolio/',
  resume: 'https://raikel.github.io/portfolio/raikel_cv_2021.pdf',
  profile: 'Creative software developer dedicated to design and implement high quality, user-friendly and feature-rich software products. Passionate about building things by coding and acquire new skills every day. Strong attention to detail, excellent problem solving skills and ability to work in a fast-paced team environment.',
  experience: [{
    dateLimits: '01/2021 - Present',
    location: 'Home Office',
    positionTitle: 'Software Engineer',
    companyName: 'Eva Health',
    workDone: [
      'Proposed and implemented architectural changes in the center software that eventually would reduce the downtime due to internet connectivity issues and faults in the communication between devices',
      'Developed a completely new version of the center server with API <b>Django</b> and <b>Django REST framework</b> (<em>Python</em>). This API included several services that communicated with hardware devices (smart lights, thermal cameras) and a remote server',
      'Refactored part of the code that interact with a thermal camera in order to reduce downtime due to connectivity and faults in proprietary vendor software. Used <b>Falkon</b> framework at a basic level (<em>Python</em>).',
      'Developed a small REST API in <b>C++</b> using <b>Crow</b> framework to interface a FLIR thermal camera with the <b>eBUS SDK</b>',
      'Learned React Native and TypeScript in approximately one month and used the acquired skills to refactor two mobile apps in order to adapt them to the proposed architectural changes.',
      'Provided remote support to center managers to solve software and hardware issues, simultaneously to the coding work.',
      'Deployed existing projects to new centers using <b>Ansible</b> as automation tool.'
  ]}, {
    dates: '06/2019 - 01/2021',
    location: 'Zacatecas, Mexico',
    position: 'Software Engineer',
    company: 'Altest',
    work: [
      'Improved software development workflows by promoting development methodologies (scrum, kanban) and tools (Git, GitHub, Ansible, web frameworks).',
      'Reduced the overall software development cycle time by introducing an <b>API</b> driven architecture, the use of modern <em>JavaScript</em> frameworks like <b>Vue</b> and automated deployment tools, like <b>Ansible</b>.',
      'Developed a <b>web scraper</b> to analyze vehicle market data from main online vendors using <b>Scrapy</b> (<em>Python</em>).',
      'Developed a <b>REST API</b> web platform for vehicle market analysis from scraped data, using <b>Django</b> and <b>Django REST framework</b> (<em>Python</em>).',
      'Designed and developed a single page web application to interface the vehicle market API, using <b>Vue</b> and <b>Quasar</b> (<em>JavaScript</em>, <em>HTML</em>, <em>CSS</em>).',
      'Developed a <b>REST API</b> web platform for <b>RFID</b> asset management, using <b>Django</b> and <b>Django REST framework</b> (<em>Python</em>).',
      'Designed and developed a single page web application to interface the RFID asset management API, using <b>Vue</b> and <b>Quasar</b> (<em>JavaScript</em>, <em>HTML</em>, <em>CSS</em>).',
      'Designed and developed a <b>mobile App</b> for the Zebra <b>RFID</b> readers, using <b>Flutter</b> (<em>Dart</em>).',
      'Developed a native <b>Flutter</b> plugin to interface the Zebra <b>RFID</b> SDK for <b>Android</b> (<em>Java</em>, <em>Dart</em>).',
      'Designed and implemented a <b>desktop application</b> to print RFID tags on Zebra printers with and interface to the RFID asset management API (<em>Java</em>).',
      'Developed a desktop application for annotating anomaly video datasets, that was used later for the training of deep learning models, using <b>PyQt</b> (<em>Python</em>).',
      'Developed a Python package for face analysis (face detection, face recognition, age and gender estimation) based on <b>deep learning</b>, using <b>Pytorch</b> and <b>OpenCv</b> (<em>Python</em>).',
      'Developed an scalable <b>REST API</b> web platform for real-time face analysis on video cameras, using <b>Django</b> and <b>Django REST framework</b> (<em>Python</em>).',
      'Designed and developed a single page web application to interface the face analysis API, using <b>Vue</b> and <b>ElementUi</b> (<em>JavaScript</em>, <em>HTML</em>, <em>CSS</em>).',
      'Developed a Python application for license plate recognition based on <b>deep learning</b>, using <b>TensorFlow</b> and <b>OpenCv</b> (<em>Python</em>).',
      'Deployed multiple projects to <b>AWS EC2</b> instances, using <b>Ansible</b> as deployment automation tool.',
      'Configured and managed <b>Linux servers</b> (Ubuntu, CentOS), including <b>security</b>, <b>databases</b> and <b>web servers</b>.'
    ],
    short: 'Improved software development workflows by promoting development methodologies, tools and team collaboration. Reduced the overall software development cycle time to the half by introducing an API driven architecture, the use of modern JavaScript frameworks and automated deployment tools.'
  }, {
    dates: '09/2017 - 02/2018',
    location: 'Zacatecas, Mexico',
    position: 'Software Engineer',
    company: 'CRD Ingeniería y Consultoría Zacatecas',
    work: [
      'Designed and developed a native <b>Android app</b> for planning drone flight missions, using the <b>DJI Android SDK</b> (<em>Java</em>).',
      'Developed a Python package for the analysis of aerial images of crop fields using <b>OpenCv</b> (<em>Python</em>). This work was also part of my Master\'s thesis.',
      'Designed and developed a desktop application for the generation and analysis of crop fields orthomosaics, using <b>PyQt</b> and OpenDroneMap (<em>Python</em>).'
    ],
    short: 'Designed and developed a native Android app for planning drone flight missions, using the DJI Android SDK. Also developed a desktop application for the generation and analysis of crop fields orthomosaics, using PyQt and OpenDroneMap.'
  }, {
    dates: '10/2013 - 07/2016',
    location: 'Santa Clara, Cuba',
    position: 'Adjunct Professor',
    company: 'Central University of Las Villas "Marta Abreu"',
    work: [
      'Prepared the study materials and taught a Satellite Communications course (64 hours).',
      'Assisted the taught of a IP Telephony course (32 hours).',
      'Assisted the taught of a Physics course (64 hours).',
      'Advised two undergraduate thesis in the telecommunications field.'
    ],
    short: 'Prepared study materials and taught several courses, including Satellite Communications, IP Telephony and basic Physics. Also I advised two undergraduate thesis in the telecommunications field.'
  }],
  researchWork: {
    works: [
      'Bordon, Raikel, et al. "Energy efficient cooperation based on relay switching on–off probability for WSNs." <em>IEEE Systems Journal</em> 12.4 (2017).',
      'Bordón, Raikel, et al. "Energy efficient power allocation schemes for a two-user network-coded cooperative cognitive radio network." <em>IEEE Transactions on Signal Processing 64.7</em> (2015).',
      'Bordón, Raikel, et al. "Energy‐efficient outage‐constrained power allocation based on statistical channel knowledge for dual‐hop cognitive relay networks." <em>International Journal of Communication Systems</em> 30.3 (2017).',
      'Bordón, Raikel, et al. "La radio cognitiva y su impacto en el uso eficiente del espectro de radio." <em>Ingeniería Electrónica, Automática y Comunicaciones</em> 36.1 (2015).',
      'Bordón, Raikel, et al. "Evaluación de modelos de propagación de canal inalámbrico." <em>Revista Cubana de Ingeniería</em> 3.1 (2012).',
      'Bordón, Raikel, et al. "Genetic algorithm aided transmit power control in cognitive radio networks." <em>2014 9th International Conference on Cognitive Radio Oriented Wireless Networks and Communications (CROWNCOM)</em>. 2014.'
    ]
  },
  education: [{
    dates: '08/2016 - 08/2018',
    location: 'Zacatecas, Mexico',
    title: 'Master of Science in Engineering',
    school: 'Autonomous University of Zacatecas "Francisco García Salinas"',
    link: 'https://www.uaz.edu.mx/',
    items: [
      'General average of 9.8/10.',
      'Thesis work entitled: "Weed detection through image analysis taken from an unmanned aerial vehicle".',
      'Research focus on computer vision applied to agriculture'
    ],
    text: 'I focused my research on computer vision applied to agriculture, culminating with the thesis work entitled: "Weed detection through image analysis taken from an unmanned aerial vehicle". I obtained a general average of 9.8/10.'
  }, {
    dates: '09/2013 - 07/2015',
    location: 'Santa Clara, Cuba',
    title: 'Master in Telematics',
    school: 'Central University of Las Villas "Marta Abreu"',
    achievements: [
      'General average of 9.75/10.',
      'Thesis work entitled: "Power allocation mechanisms to reduce energy consumption of a cooperative cognitive radio network assisted by network coding".',
      'Research focus on cognitive radio networks and optimization'
    ],
    text: 'I focused my research on cognitive radio networks and optimization, culminating with the thesis work entitled: "Power allocation mechanisms to reduce energy consumption of a cooperative cognitive radio network assisted by network coding". I obtained a general average of 9.75/10.'
  }, {
    dates: '09/2007 - 07/2012',
    location: 'Santa Clara, Cuba',
    title: 'Engineer in Telecommunications and Electronics',
    school: 'Central University of Las Villas "Marta Abreu"',
    achievements: [
      'General average of 10/10.',
      'Graduated with honours',
      'Thesis work entitled: "Analysis and design of algorithms for performance optimization in ad hoc radio cognitive networks".'
    ],
    text: 'Finished my studies with the thesis work entitled: "Power allocation mechanisms to reduce energy consumption of a cooperative cognitive radio network assisted by network coding". I obtained a general average of 10/10 and graduated with honours.'
  }],
  programming: {
    languages: [{
      name: 'Python',
      level: 95
    }, {
      name: 'JavaScript',
      level: 95
    }, {
      name: 'Java',
      level: 85
    }, {
      name: 'C',
      level: 70
    }, {
      name: 'PHP',
      level: 75
    }, {
      name: 'Wolfram',
      level: 65
    }, {
      name: 'Dart',
      level: 60
    }, {
      name: 'Matlab',
      level: 90
    }]
  },
  skills: [{
    title: 'Web and mobile development',
    items: [
      { name: 'Django', time: '+5 years', logo: 'images/logo-django.svg' },
      { name: 'Django RF', time: '+5 years', logo: 'images/logo-drf.png' },
      { name: 'Vue.js', time: '+3 years', logo: 'images/logo-vue.svg' },
      { name: 'Quasar', time: '+2 year', logo: 'images/logo-quasar.png' },
      { name: 'HTML 5', time: '+8 years', logo: 'images/logo-html.svg' },
      { name: 'CSS 3', time: '+8 years', logo: 'images/logo-css.svg' },
      { name: 'Flutter', time: '2 year', logo: 'images/logo-flutter.svg' },
      { name: 'Android', time: '+2 years', logo: 'images/logo-android.svg' }
    ]
  }, {
    title: 'Machine learning',
    items: [
      { name: 'Pytorch', time: '+2 years', logo: 'images/logo-pytorch.svg' },
      { name: 'OpenCv', time: '+8 years', logo: 'images/logo-opencv.svg' },
      { name: 'TensorFlow', time: '+2 year', logo: 'images/logo-tensorflow.svg' }
    ]
  }, {
    title: 'Other Skills',
    items: [
      { name: 'Ansible', time: '1 year', logo: 'images/logo-ansible.svg' },
      { name: 'AWS EC2', time: '+1 year', logo: 'images/logo-awsec2.svg' },
      { name: 'Linux OS', time: '+8 year', logo: 'images/logo-linux.svg' },
      { name: 'Git/Github', time: '+5 year', logo: 'images/logo-git.svg' }
    ]
  }, {
    title: 'UI Design',
    items: [
      { name: 'Figma', time: '1 year', logo: 'images/logo-figma.svg' },
      { name: 'Inkscape', time: '+6 year', logo: 'images/logo-inkscape.svg' },
      { name: 'AdobeXd', time: '1 year', logo: 'images/logo-adobexd.png' }
    ]
  }],
  services: [{
    title: 'Full Stack Development',
    info: 'I develop API-driven applications backends using Django and Django Rest Framework. I also build responsive websites and single page web apps using Vue.',
    image: 'images/programming.svg'
  }, {
    title: 'Mobile App Development',
    info: 'I develop mobile applications using Flutter and native Android apps with Java. I integrate mobile apps with API backends and hardware devices.',
    image: 'images/mobile-app.svg'
  }, {
    title: 'Data Science & AI',
    info: 'I implement and deploy deep learning models for computer vision or specific use cases. I also develop production ready web scrapers for data analysis.',
    image: 'images/data-science.svg'
  }, {
    title: 'Cloud Management',
    info: 'I automate the full deployment of applications to the cloud with Ansible and manage websites on virtual machine instances (database, web server, security).',
    image: 'images/cloud-servers.svg'
  }, {
    title: 'UI/UX Design',
    info: 'I prototype user interfaces for web and mobile applications. I also design the application flow and features for best user experience.',
    image: 'images/ui-design.svg'
  }, {
    title: 'Applied Research',
    info: 'I use my academic research background to build software products based on state-of-art methods and techniques.',
    image: 'images/research.svg'
  }],
  projects: [{
    title: 'ACMA SPA',
    info: 'Automated Car Market Analysis, SPA frontend (Vue, Quasar)',
    image: 'images/project_acma_spa.jpg',
    date: 'Aug. 2020 - Nov. 2020'
  }, {
    title: 'ACMA API',
    info: 'Automated Car Market Analysis, API backend (Django Rest Framework)',
    image: 'images/project_acma_api.jpg',
    date: 'Aug. 2020 - Nov. 2020'
  }, {
    title: 'SICAF SPA',
    info: 'RFID Asset Management Platform, SPA frontend (Vue, Quasar)',
    image: 'images/project_sicaf_spa.jpg',
    date: 'May 2020 - Aug. 2020'
  }, {
    title: 'SICAF API',
    info: 'RFID Asset Management Platform, API backend (Django Rest Framework)',
    image: 'images/project_sicaf_api.jpg',
    date: 'May 2020 - Aug. 2020'
  }, {
    title: 'SICAF APP',
    info: 'RFID Asset Management Platform, Android App (Flutter, Android SDK)',
    image: 'images/project_sicaf_app.jpg',
    date: 'May 2020 - Aug. 2020'
  }, {
    title: 'SICAF ZLP',
    info: 'RFID tags printing interface to Zebra printers (Java)',
    image: 'images/project_sicaf_zlp.jpg',
    date: 'May 2020 - Aug. 2020'
  }, {
    title: 'DNFAS SPA',
    info: 'Face analysis platform with deep learning, SPA frontend (Vue)',
    image: 'images/project_dnfas_spa.jpg',
    date: 'Feb. 2020 - May. 2020'
  }, {
    title: 'ANVID',
    info: 'Application to make annotations on videos, Desktop App (PyQt, Pytorch)',
    image: 'images/project_anvid.jpg',
    date: 'Dic. 2019 - Jan. 2020'
  }, {
    title: 'MCROPS',
    info: 'Library for analysis of images of crop fields, (Python, OpenCv)',
    image: 'images/project_mcrops.jpg',
    date: 'Jan. 2019 - May. 2019'
  }],
  hobbies: [{
    label: 'Travel',
    image: 'images/travel.svg'
  }, {
    label: 'Movies & TV',
    image: 'images/movies.svg'
  }, {
    label: 'Video Games',
    image: 'images/games.svg'
  }, {
    label: 'Running',
    image: 'images/running.svg'
  }, {
    label: 'Reading',
    image: 'images/reading.svg'
  }]
};
Object.freeze(data);

export default data;
