// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file, not the components.
//  Add your project links in the `projects` array (github / live).
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sujal Shrestha',
  role: 'Backend Software Engineer',
  location: 'Putalisadak, Kathmandu, Nepal',
  email: 'shresthasujal519@gmail.com',
  phone: '+977 9827732079',
  github: 'https://github.com/Asur-SujalShrestha',
  linkedin: '', // paste your LinkedIn URL to show it
  cv: 'Sujal_Shrestha_CV.pdf', // file lives in /public
}

export const about = [
  'I am a backend software engineer in Kathmandu, building scalable, secure and cloud-native applications with Java and Spring Boot.',
  'At Pexus Tech. / ING Tech I design services around Spring Modulith and Hexagonal Architecture, so domain boundaries stay clear as the product grows.',
  'My work covers multi-tenant services, Keycloak-based access control, real-time WebSocket features, and the Docker and Kubernetes infrastructure that runs them. I also build full-stack projects with React.',
]

export const facts = [
  ['Based in', 'Kathmandu, Nepal'],
  ['Currently', 'Java Developer, Pexus Tech. / ING Tech'],
  ['Studied', 'Computing Science, Islington College'],
  ['Focus', 'Secure, multi-tenant backend systems'],
]

// Nodes of the hero diagram (ports around a hexagonal domain core)
export const ports = [
  { label: 'Keycloak', note: 'IAM with permission-driven RBAC for authentication and fine-grained authorization.' },
  { label: 'WebSocket', note: 'Real-time admission events and routine imports pushed across modules and tenants.' },
  { label: 'PostgreSQL', note: 'Schema-based multi-tenancy with tenant-aware application functionality.' },
  { label: 'Kubernetes', note: 'Dockerized services with Cloud Config and HashiCorp Vault for configuration and secrets.' },
  { label: 'Elasticsearch', note: 'Logging infrastructure alongside MinIO storage in the cloud-native stack.' },
  { label: 'Redis', note: 'Caching layer for the services that need fast reads.' },
]

export const experience = {
  role: 'Java Developer',
  company: 'Pexus Tech. / ING Tech',
  period: 'Dec 2025 - Present',
  projects: [
    {
      name: 'Enrollment V2',
      summary: 'Student enrollment platform on a modular, multi-tenant foundation.',
      stack: ['Spring Modulith', 'Hexagonal Architecture', 'Keycloak', 'PostgreSQL', 'Docker', 'Kubernetes'],
      points: [
        'Designed and implemented Enrollment V2 using Spring Modulith and Hexagonal Architecture, establishing modular and maintainable domain boundaries.',
        'Implemented Keycloak-based IAM and permission-driven RBAC for secure authentication and fine-grained authorization.',
        'Designed schema-based multi-tenancy with PostgreSQL and implemented tenant-aware application functionality.',
        'Built cloud-native infrastructure using Docker and Kubernetes, with MinIO, Redis, Elasticsearch, Cloud Config and HashiCorp Vault for storage, caching, logging, configuration and secrets management.',
        'Implemented WebSocket-based real-time student admission events across application modules to enable instant updates.',
      ],
    },
    {
      name: 'Attendease',
      summary: 'Multi-tenant attendance and routine management services.',
      stack: ['Microservices', 'WebSocket', 'Keycloak', 'Reverse proxy'],
      points: [
        'Contributed to a multi-tenant microservice architecture supporting isolated operations across multiple tenants.',
        'Implemented WebSocket-based routine import for synchronizing student routines across different groups and tenants.',
        'Integrated biometric attendance services with scheduled processing and synchronization of attendance logs.',
        'Developed email and report generation services and supported onboarding and configuration of new tenants.',
        'Migrated Keycloak authorization from role-based to permission-based authorities and integrated Attendease with Enrollment through a reverse proxy.',
      ],
    },
    {
      name: 'Authorization Server',
      summary: 'Central authorization service shared by Attendease and Enrollment.',
      stack: ['Spring Modulith', 'Hexagonal Architecture', 'Keycloak', 'Feign Client'],
      points: [
        'Designed and implemented an Authorization Server using Spring Modulith and Hexagonal Architecture to provide centralized authorization capabilities.',
        'Integrated with Keycloak IAM to retrieve user details, roles and granular permissions for fine-grained access control.',
        'Developed Feign Client-based integration to provide authorization services to both the Attendease and Enrollment systems.',
      ],
    },
  ],
}

export const skills = [
  ['Languages', ['Java', 'SQL']],
  ['Backend', ['Spring Boot', 'Microservices', 'Spring Modulith', 'Hexagonal Architecture']],
  ['Security', ['Keycloak', 'IAM', 'OAuth 2.0 / JWT']],
  ['Databases', ['PostgreSQL', 'MySQL', 'MS SQL']],
  ['Messaging & real-time', ['Kafka', 'RabbitMQ', 'WebSocket']],
  ['Caching & logs', ['Redis', 'Elasticsearch']],
  ['Storage & config', ['MinIO', 'HashiCorp Vault', 'Cloud Config']],
  ['Infrastructure', ['Docker', 'Kubernetes', 'CI/CD']],
  ['Frontend', ['React.js']],
  ['Version control', ['Git', 'GitHub', 'GitLab']],
]

// Add your links: github: 'https://github.com/...', live: 'https://...'
export const projects = [
  {
    name: 'Online Learning and Collaboration Platform',
    description:
      'A full-stack platform for organizations, classrooms, groups, assignments and announcements, with real-time communication and file and content sharing.',
    highlights: ['JWT authentication', 'Role-based authorization', 'WebSocket communication'],
    stack: ['Spring Boot', 'React', 'PostgreSQL'],
    github: '',
    live: '',
  },
  {
    name: 'Hospital Management System',
    description:
      'A microservices-based system for patient registration, doctor management, appointments and medical records.',
    highlights: ['Role-based access control', 'REST APIs', 'Normalized PostgreSQL design'],
    stack: ['Java', 'Spring Boot', 'Microservices', 'React', 'PostgreSQL'],
    github: '',
    live: '',
  },
  {
    name: 'Online Food Ordering System',
    description:
      'An end-to-end food ordering platform with restaurant, customer, admin and delivery workflows, including order tracking and rider assignment.',
    highlights: ['Khalti payment gateway', 'Restaurant management', 'Delivery management'],
    stack: ['Java Spring Boot', 'React', 'PostgreSQL'],
    github: '',
    live: '',
  },
]

export const education = [
  { title: 'Bachelor in Computing Science', place: 'Islington College', period: 'Nov 2022 - June 2025' },
  { title: '+2 level in Science', place: 'Capital College (CCRC)', period: '2020 - 2022' },
]

export const certifications = ['AWS Cloud Foundation', 'AWS Cloud Data Engineering', 'AWS Cloud Machine Learning']
