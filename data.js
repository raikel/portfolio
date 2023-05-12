const data = {
  fullName: 'Raikel Bordón López',
  email: 'raikelbl@gmail.com',
  birthDate: '14/08/1988',
  address: 'Zacatecas, México',
  location: 'https://www.google.com/maps/@22.7747798,-102.5858141,14z',
  website: 'https://raikel.github.io/portfolio/',
  resume: 'https://raikel.github.io/portfolio/raikel_cv_2023.pdf',
  profile: 'Backend Developer dedicated to design and implement high quality, user-friendly and feature-rich software products. Proficient in Python, JavaScript and Dart.  Passionate about continuous learning and problem-solving. Collaborative and adaptable in fast-paced team environments.',
  experience: [
    {
      dates: '06/2021 - Present',
      location: 'Remote',
      position: 'Backend Engineer',
      company: 'Cornershop by Uber',
      short: 'Maintained and enhanced a large legacy codebase, resolving issues and implementing new features across diverse business domains using Python, Django, Celery, Redis, and PostgreSQL. Designed and implemented a comprehensive tool for automated generation, management, and configuration of periodic reports, leveraging diverse data sources such as orders, receipts, and customer data.'
    },
    {
      dates: '01/2021 - 06/2021',
      location: 'Remote',
      position: 'Software Engineer',
      company: 'Eva Health',
      short: 'Proposed and implemented architectural changes to enhance the center software, resulting in reduced downtime caused by internet connectivity issues and communication faults between devices. Refactored code segments responsible for interacting with a thermal camera, minimizing downtime due to connectivity issues and faults in proprietary vendor software.'
    },
    {
      dates: '06/2019 - 01/2021',
      location: 'Zacatecas, Mexico',
      position: 'Software Engineer',
      company: 'Altest',
      short: 'Accelerated software development cycles by adopting an API-driven architecture, leveraging modern frameworks like Vue, and automating deployments using Ansible. Constructed a REST API for RFID asset management, employing Django and Django REST framework. Designed and developed a single-page web application using Vue and Quasar to interface with the RFID asset management API.'
    },
    {
      dates: '09/2017 - 02/2018',
      location: 'Zacatecas, Mexico',
      position: 'Software Engineer',
      company: 'CRD Ingeniería y Consultoría Zacatecas',
      short: 'Created a native Android app using the DJI Android SDK for efficient planning of drone flight missions, ensuring precise aerial data collection and analysis. Designed and developed a desktop application using PyQt and OpenDroneMap for generating and analyzing orthomosaics of crop fields, enabling accurate assessment of vegetation health and growth patterns.'
    },
    {
      dates: '10/2013 - 07/2016',
      location: 'Santa Clara, Cuba',
      position: 'Adjunct Professor',
      company: 'Central University of Las Villas "Marta Abreu"',
      short: 'Prepared study materials and taught several courses, including Satellite Communications, IP Telephony and basic Physics. Also I advised two undergraduate thesis in the telecommunications field.'
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
      dates: '08/2018 - 12/2019',
      location: 'Zacatecas, Mexico',
      title: 'PhD in Engineering and Applied Technology',
      school: 'Autonomous University of Zacatecas "Francisco García Salinas"',
      link: 'https://www.uaz.edu.mx/',
      text: 'I focused my research on computer vision applied to agriculture. I completed only two semesters because at that time I wanted to dedicate full time to professional software development.'
    },
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
        level: 95
      },
      {
        name: 'JavaScript',
        level: 95
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
        name: 'C/C++',
        level: 70
      }
    ]
  },
  skills: [
    {
      title: 'Web and mobile development',
      items: [
        { name: 'Django', time: '+5 years', logo: 'images/logo-django.svg' },
        { name: 'Django RF', time: '+5 years', logo: 'images/logo-drf.png' },
        { name: 'FastAPI', time: '2 years', logo: 'images/logo-fastapi.png' },
        { name: 'SQLAlchemy', time: '2 years', logo: 'images/logo-sqla.png' },
        { name: 'Redis', time: '3 years', logo: 'images/logo-redis.png' },
        { name: 'PostgreSQL', time: '3 years', logo: 'images/logo-postgres.png' },
        { name: 'Vue.js', time: '+4 years', logo: 'images/logo-vue.svg' },
        { name: 'HTML 5', time: '+8 years', logo: 'images/logo-html.svg' },
        { name: 'CSS 3', time: '+8 years', logo: 'images/logo-css.svg' },
        { name: 'Flutter', time: '3 year', logo: 'images/logo-flutter.svg' },
        { name: 'Android', time: '+2 years', logo: 'images/logo-android.svg' }
      ]
    },
    {
      title: 'Other Skills',
      items: [
        { name: 'Ansible', time: '1 year', logo: 'images/logo-ansible.svg' },
        { name: 'Docker', time: '+1 year', logo: 'images/logo-docker.png' },
        { name: 'Linux OS', time: '+8 year', logo: 'images/logo-linux.svg' },
        { name: 'Git/Github', time: '+5 year', logo: 'images/logo-git.svg' }
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
