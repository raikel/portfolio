const data = {
  fullName: 'Raikel Bordón López',
  email: 'raikelbl@gmail.com',
  birthDate: undefined,
  address: 'CDMX, México',
  location: 'https://www.google.com/maps/@19.4274834,-99.2085295,18z',
  websiteLabel: 'raikel.github.io/portfolio/',
  website: 'https://raikel.github.io/portfolio/',
  resume: 'https://raikel.github.io/portfolio/raikel-bordon-cv.pdf',
  profile: 'Backend Engineer with 7+ years of experience in designing, developing, and maintaining backend systems and APIs. Proficient in Python, JavaScript, and SQL. Skilled in building REST APIs and service-oriented architectures.',
  showProjectCount: false,
  experience: [
    {
      dates: 'Jun 2021 - Aug 2024',
      location: 'Mexico ‧ Remote',
      position: 'Senior Software Engineer ‧ Backend',
      company: 'Cornershop by Uber',
      short: [
        'Designed and implemented a tool to manage and generate periodic reports for orders, receipts and customer data, reducing manual engineering work by 16 hours per week.',
        'Optimized PostgreSQL queries in report generation tool, reducing query execution time by an average of 20%. Integrated AWS CloudWatch with reports tool, enabling proactive issue resolution and improving system performance.',
        'Implemented a distributed caching mechanism with Redis to fetch store orders, reducing database load by 30%.',
        'Collaborated with frontend developers to optimize API response times for bulk product update and creation, achieving a 16% reduction in latency.',
        'Led the development of services and APIs for the management of multi-slot schedule of stores, improving team collaboration and client integration efficiency.'
      ]
    },
    {
      dates: 'Jan 2021 - Jun 2021',
      location: 'Mexico ‧ Remote',
      position: 'Software Engineer ‧ Backend',
      company: 'Eva Health',
      short: [
        'Implemented architectural changes that reduced the downtime of service nodes due of connectivity issues by 20%.',
        'Designed and implemented a high-performance API backend that integrated 8+ services and enabled communication with smart lights, thermal cameras and edge devices.',
        'Led the re-architecting of the thermal camera manager service, leading to a 35% reduction in image acquisition latency.'
      ]
    },
    {
      dates: 'Jun 2019 - Jan 2021',
      location: 'Zacatecas ‧ Mexico',
      position: 'Full Stack Developer',
      company: 'Altest',
      short: [
        'Led the development of an API for RFID asset management, supporting over 10,000 assets and serving 500+ users daily.',
        'Developed web, mobile and desktop applications that integrated RFID readers and tag printers with the API backend for inventory management.',
        'Architected and implemented a scalable REST API backend and a web frontend for real-time face analysis on video cameras. The platform supported up to 100 cameras and processed over 7,000 faces per minute.',
        'Led a team to adopt a DevOps culture, reducing bug rates by 20% through automated testing and continuous integration.'
      ]
    },
    {
      dates: 'Sep 2017 - Jan 2018',
      location: 'Zacatecas ‧ Mexico',
      position: 'Full Stack Developer',
      company: 'CRD Ingeniería y Consultoría Zacatecas',
      short: [
        'Created a native Android app using the DJI Android SDK for efficient planning of drone flight missions, ensuring precise aerial data collection and analysis.',
        'Designed and developed a desktop application using PyQt and OpenDroneMap for generating and analyzing orthomosaics of crop fields, enabling accurate assessment of vegetation health and growth patterns.'
      ]
    },
    {
      dates: 'Oct 2013 - Jul 2016',
      location: 'Santa Clara, Cuba',
      position: 'Adjunct Professor',
      company: 'Central University of Las Villas "Marta Abreu"',
      short: [
        'Prepared study materials and taught several courses, including Satellite Communications, IP Telephony and basic Physics.',
        'Advised two undergraduate thesis in the telecommunications field.'
      ]
    }
  ],
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
  education: [
    {
      dates: '08/2016 - 08/2018',
      location: 'Zacatecas, Mexico',
      title: 'Master of Science in Engineering',
      school: 'Autonomous University of Zacatecas "Francisco García Salinas"',
      link: 'https://www.uaz.edu.mx/',
      text: 'I focused my research on computer vision applied to agriculture, culminating with the thesis work entitled: "Weed detection through image analysis taken from an unmanned aerial vehicle". I obtained a general average of 9.8/10.'
    },
    {
      dates: '09/2013 - 07/2015',
      location: 'Santa Clara, Cuba',
      title: 'Master in Telematics',
      school: 'Central University of Las Villas "Marta Abreu"',
      text: 'I focused my research on cognitive radio networks and optimization, culminating with the thesis work entitled: "Power allocation mechanisms to reduce energy consumption of a cooperative cognitive radio network assisted by network coding". I obtained a general average of 9.75/10.'
    },
    {
      dates: '09/2007 - 07/2012',
      location: 'Santa Clara, Cuba',
      title: 'Engineer in Telecommunications and Electronics',
      school: 'Central University of Las Villas "Marta Abreu"',
      text: 'Finished my studies with the thesis work entitled: "Power allocation mechanisms to reduce energy consumption of a cooperative cognitive radio network assisted by network coding". I obtained a general average of 10/10 and graduated with honours.'
    }
  ],
  programming: {
    languages: [
      {
        name: 'Python',
        level: 100
      },
      {
        name: 'JavaScript',
        level: 100
      },
      {
        name: 'Go',
        level: 85
      },
      {
        name: 'Dart',
        level: 85
      },
      {
        name: 'Java',
        level: 80
      },
      {
        name: 'PHP',
        level: 80
      },
      {
        name: 'C/C++',
        level: 80
      }
    ]
  },
  skills: [
    {
      title: 'Web and mobile development',
      items: [
        { name: 'Django', time: '+7 years', logo: 'images/logo-django.svg' },
        { name: 'Django RF', time: '+5 years', logo: 'images/logo-drf.png' },
        { name: 'FastAPI', time: '3 years', logo: 'images/logo-fastapi.png' },
        { name: 'SQLAlchemy', time: '5 years', logo: 'images/logo-sqla.png' },
        { name: 'Redis', time: '7 years', logo: 'images/logo-redis.png' },
        { name: 'PostgreSQL', time: '7 years', logo: 'images/logo-postgres.png' },
        { name: 'Vue.js', time: '+7 years', logo: 'images/logo-vue.svg' },
        { name: 'HTML 5', time: '+8 years', logo: 'images/logo-html.svg' },
        { name: 'CSS 3', time: '+8 years', logo: 'images/logo-css.svg' },
        { name: 'Flutter', time: '3 year', logo: 'images/logo-flutter.svg' },
        { name: 'Android', time: '+3 years', logo: 'images/logo-android.svg' }
      ]
    },
    {
      title: 'Other Skills',
      items: [
        { name: 'Ansible', time: '2 year', logo: 'images/logo-ansible.svg' },
        { name: 'Docker', time: '+5 year', logo: 'images/logo-docker.png' },
        { name: 'Linux OS', time: '+8 year', logo: 'images/logo-linux.svg' },
        { name: 'Git/Github', time: '+7 year', logo: 'images/logo-git.svg' }
      ]
    },
    {
      title: 'Machine learning',
      items: [
        { name: 'Pytorch', time: '+2 years', logo: 'images/logo-pytorch.svg' },
        { name: 'OpenCv', time: '+8 years', logo: 'images/logo-opencv.svg' },
        { name: 'TensorFlow', time: '+2 year', logo: 'images/logo-tensorflow.svg' }
      ]
    }
  ],
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
