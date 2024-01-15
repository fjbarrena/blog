import { getFileBySlug } from '@/lib/mdx'
import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'
import { Image } from '@/components/Image'

const talks = [
  {
    id: 99993,
    year: 2023,
    title: 'API Security & Testing - A pragmatic guide',
    slidesUrl: null,
    videoUrl: null,
    confImageUrl: '/static/images/companies/codemotion.png',
  },
  {
    id: 99992,
    year: 2022,
    title: 'Speaker at a round table about API Security',
    slidesUrl: null,
    videoUrl: null,
    confImageUrl: '/static/images/companies/apiaddicts.png',
  },
  {
    id: 99991,
    year: 2022,
    title: 'API Security & Testing - A pragmatic guide',
    slidesUrl: null,
    videoUrl: null,
    confImageUrl: '/static/images/companies/apiaddicts.png',
  },
  {
    id: 1,
    year: 2022,
    title: 'API Security: Workshop to harden your API',
    slidesUrl: 'https://www.slideshare.net/fjbarrena/codemotion-2022-api-security-workshoppdf',
    videoUrl: null,
    confImageUrl: '/static/images/companies/codemotion.png',
  },
  {
    id: 2,
    year: 2021,
    title: 'Hard as a pod. How to secure your Kubernetes Deployments',
    slidesUrl:
      'https://es.slideshare.net/fjbarrena/vlcsofting-2021-hard-as-a-pod-hardening-de-despliegues-en-kubernetes-con-mucho-flow',
    videoUrl: 'https://www.youtube.com/watch?v=QJU3FR9v9Bs',
    confImageUrl: '/static/images/companies/vlcsofting.png',
  },
  {
    id: 3,
    year: 2021,
    title: 'Welcome to Gotham. New and terrifying ways of cyberattacks',
    slidesUrl:
      'https://es.slideshare.net/fjbarrena/welcome-to-gotham-nuevas-formas-ingeniosas-y-terrorficas-de-ciberataques',
    videoUrl: 'https://www.youtube.com/watch?v=ngrlQeFYlQM&t=3141s',
    confImageUrl: '/static/images/companies/t3chfest.png',
  },
  {
    id: 4,
    year: 2021,
    title: 'The Rustalorian. This is the way',
    slidesUrl:
      'https://es.slideshare.net/fjbarrena/codemotion-2021-the-rustalorian-este-es-el-camino',
    videoUrl: null,
    confImageUrl: '/static/images/companies/codemotion.png',
  },
  {
    id: 5,
    year: 2020,
    title: 'Stop being the weakest rival with DevSecOps',
    slidesUrl: 'https://www.slideshare.net/fjbarrena/deja-de-ser-el-rival-ms-dbil-con-devsecops',
    videoUrl: 'https://www.youtube.com/watch?v=Uhx9VQYWSCE',
    confImageUrl: '/static/images/companies/vlctesting.png',
  },
  {
    id: 6,
    year: 2020,
    title: 'Big Data in Cybersecurity: Better to die on your feet than to live on your knees',
    slidesUrl:
      'https://es.slideshare.net/fjbarrena/codemotion-2020-big-data-en-ciberseguridad-mejor-morir-de-pie-que-vivir-arrodillado',
    videoUrl:
      'https://www.youtube.com/watch?v=jxvqOGjTal0&list=PLq2-o3pBTowcAgqgVzqC4S7IeYSiVYIR2&index=9&t=1877s',
    confImageUrl: '/static/images/companies/codemotion.png',
  },
  {
    id: 7,
    year: 2020,
    title: 'Speaker at a round table about API Security',
    slidesUrl: null,
    videoUrl: 'https://www.youtube.com/watch?v=HjqXgDzxS10',
    confImageUrl: '/static/images/companies/apiaddicts.png',
  },
  {
    id: 8,
    year: 2020,
    title: 'Pirates of the Cloud: whose responsibility is it?',
    slidesUrl: 'https://es.slideshare.net/fjbarrena/webinar-codemotion-2020-piratas-del-cloud',
    videoUrl: 'https://www.youtube.com/watch?v=N3pf08xcWtE',
    confImageUrl: '/static/images/companies/codemotion.png',
  },
  {
    id: 9,
    year: 2020,
    title: 'OSINT Techniques that will leave you with a crooked ass',
    slidesUrl:
      'https://es.slideshare.net/fjbarrena/totoconf2020-tcnicas-osint-que-te-dejarn-con-el-papo-torcido',
    videoUrl: 'https://www.youtube.com/watch?v=W4PTlwDJgZI',
    confImageUrl: '/static/images/companies/codemotion.png',
  },
  {
    id: 10,
    year: 2020,
    title: 'Speaker at a round table of cybersecurity experts',
    slidesUrl: null,
    videoUrl: 'https://www.youtube.com/watch?v=daxXWmmbgLQ',
    confImageUrl: '/static/images/companies/codemotion.png',
  },
  {
    id: 11,
    year: 2019,
    title: 'Machine Learning at full throttle with GraalVM',
    slidesUrl: 'https://es.slideshare.net/fjbarrena/machine-learning-a-todo-gas-con-graalvm',
    videoUrl: 'https://www.youtube.com/watch?v=XAHRPlse62w',
    confImageUrl: '/static/images/companies/codemotion.jpg',
  },
  {
    id: 12,
    year: 2019,
    title: 'Insanely fast apps with Quarkus',
    slidesUrl: 'https://es.slideshare.net/fjbarrena/aplicaciones-absurdamente-rpidas-con-quarkusio',
    videoUrl: null,
    confImageUrl: '/static/images/companies/vlcsofting.png',
  },
  {
    id: 13,
    year: 2019,
    title: 'Kubernetes: The Cloud King',
    slidesUrl: 'https://es.slideshare.net/fjbarrena/kubernetes-the-cloud-king',
    videoUrl: null,
    confImageUrl: '/static/images/companies/iti.png',
  },
  {
    id: 14,
    year: 2018,
    title: "NestJS: Backends in Node for Javas' & DotNets'",
    slidesUrl:
      'https://es.slideshare.net/fjbarrena/nestjs-backends-en-node-para-javeros-y-puntoneteros',
    videoUrl: 'https://www.youtube.com/watch?v=7oEV4p8IJVM',
    confImageUrl: '/static/images/companies/codemotion.png',
  },
]
const training = [
  {
    id: 2020,
    items: [
      'C1b3rWall Academy - Ministerio del Interior, Guardia Civil, Policia Nacional',
      'Hardening in Docker containers and microservices-based architectures',
    ],
  },
  {
    id: 2018,
    items: ['Big Data implementation strategy for Managers'],
  },
  {
    id: 2016,
    items: ['Project Management with Scrum Manager'],
  },
  {
    id: 2015,
    items: ['Requirements management in software projects'],
  },
]

const courses = [
  {
    id: 2021,
    items: [
      'University specialist course in the National Security Scheme for the University of Mondragón',
      'Subject of the Master Big Data Analytics: Machine Learning applied to cybersecurity for the Polytechnic University of Valencia',
      'National Security Scheme Course (ENS)',
      'Introduction to cybersecurity for organizations, cloud security and application security for REDIT',
      'Introduction to cybersecurity of organizations for REDIT',
    ],
  },
  {
    id: 2020,
    items: ['Introduction to cybersecurity of organizations for REDIT'],
  },
  {
    id: 2019,
    items: [
      'Complete course of FullStack application development in Java for Stadler',
      'Kubernetes: from zero to hero',
      'Enterprise applications with React (also in 2018)',
    ],
  },
  {
    id: 2018,
    items: [
      'Java Forensics - How to improve performance in Java applications(also in 2017)',
      'Advanced application development in Angular 6',
    ],
  },
  {
    id: 2017,
    items: ['Advanced application development in Angular 4'],
  },
  {
    id: 2016,
    items: [
      'Full course of FullStack application development in Java for Tecnocom (also editions in 2015 and 2014)',
      'Advanced application development in Angular 2',
      'Introduction to AngularJS (also in 2015)',
      'Introduction to NodeJS (also in 2015)',
      'Mobile application development with iONIC',
    ],
  },
  {
    id: 2015,
    items: [
      'Software transfer and exploitation course',
      'Advanced SharePoint 2013',
      'SOA Architectures in Java',
    ],
  },
  {
    id: 2014,
    items: [
      'Advanced course: Spring & Hibernate (also in 2013)',
      'Advanced development using Liferay Portal for Fujitsu',
    ],
  },
]

const experience = [
  {
    id: 0,
    position: 'Principal Engineer',
    company: 'Labster',
    companyUrl: 'https://www.labster.com',
    date: 'oct 2023 - act',
    image: '/static/images/companies/labster.svg',
    body: `Labster is a company that develops virtual laboratory simulations for science education. 
    These simulations are designed to enhance traditional science education by providing students with 
    interactive and immersive virtual experiments<br/><br/>
    As Principal Engineer at Labster, my role covers different aspects of the software development landscape, from
    problem solving, system design, architecture and technical leadership to mentorship, innovation and
    collaboration with other teams within the company.<br/><br/>
    Technically, we use different tools and languages at Labster, always following a microservice mindset
    with a strong focus on decoupling, security and performance. Particularly noteworthy is the use of <b>Docker</b>,
    <b>NestJS and NodeJS</b>, <b>Typescript</b>, <b>MongoDB</b>, <b>Redis</b>, <b>VueJS</b> and <b>Kubernetes</b>`,
    tags: [
      'EdTech',
      'product',
      '🐋 docker',
      'kubernetes',
      'security',
      'microservices',
      'vuejs',
      'typescript',
      'nodejs',
      'nestjs',
      'MongoDB',
      'Redis',
      'testing',
      'scrum',
      'BDD',
    ],
    language: '🇺🇸 english • remote',
  },
  {
    id: 1,
    position: 'Principal Engineer & CTO',
    company: 'Kyso Inc.',
    companyUrl: 'https://about.kyso.io',
    date: 'nov 2021 - nov 2023 (2 years)',
    image: '/static/images/companies/kyso.svg',
    body: `<a href="https://about.kyso.io" target="_blank" class="underline font-bold">Kyso</a> is an early stage b2b data science startup with a fast growing team backed by some 
    great investors like Techstars, Lunar Ventures, Tribal Ventures and more. Responsible for the engineering side of the company and member of the executive. 
    I wore many hats, from product owner, security, architecture, development, management and hiring. Also, I was in charge of technical customer relations. 
    We implemented from scratch the technical culture of the company with very good results, building a great product with best engineering practices, 
    focusing especially in maintainability and <b><a href="https://fjbarrena.dev/blog/permissions-in-a-distributed-architecture" target="_blank">security<a></b>.<br><br>
    
    With a small team, we were able to build a production ready product quickly, thanks to the great team we were able to hire. The product was designed to be installed
    on-premises in customer's infrastructure. That was a challenge, because every customer has its own cloud provider, and Kyso must work in all of them. The deployment
    was prepared using Docker and Kubernetes, and we added support for Helm and Terraform later. In order to keep the product maintainable and extensible, we designed 
    the architecture to be driven by events, using NATS as an event broker and developing a set of consumers which extends the core features of the product 
    (notifications with slack and teams, analytics, etc.). The API was built using NestJS and Typescript, and the frontend was built using NextJS and Typescript as well. <br/><br/>

    Responsible of SecDevOps implementation, defining CI/CD pipelines for: building software components, build docker images, assess quality code, assess security of the code, dependencies and Docker images. I built pipelines for automatic deployment 
    in different environments (staging, production and testing), using Gitlab CI/CD and Github actions.<br/><br/>
    
    Also, I was in charge of developing a proof of concept about a LLM (Large Language Model) using Open Source resources like
    <b><a href="https://github.com/imartinez/privateGPT" target="_blank" class="underline">PrivateGPT</a></b> and <b><a href="https://huggingface.co/models" target="_blank" class="underline">HuggingFace Open Source Models</a></b>. This LLM
    is trained on top of an Open Source model, for example Open Llama, with <b>your data</b>, generating a new LLM that can answer questions related to your data. As this
    model is trained with your data, and deployed in your infrastructure, your <b>privacy is guaranteed</b>. This model was integrated as well with Kyso's permission system, 
    giving the users the power to decide who can use it.`,
    tags: [
      'CI/CD',
      'DevOps',
      'Terraform',
      'product',
      'technical leadership',
      '🐋 docker',
      'kubernetes',
      'security',
      'customer relationships',
      'nextjs',
      'react',
      'typescript',
      'nodejs',
      'nestjs',
      'elasticsearch',
      'jupyter',
      'LLM',
      '🤖 AI',
      'MongoDB',
      'Elasticsearch',
    ],
    language: '🇺🇸 english • remote',
  },
  {
    id: 2,
    position: 'Software Architect',
    company: 'Nexica Econocom',
    companyUrl: 'https://www.nexica.com/',
    date: 'oct 2019 - nov 2021 (2 years and 1 month)',
    image: '/static/images/companies/nexica.png',
    body: `Responsible for the refactoring of the CloudManager
          (website and public documentation), a tool to manage
          Hybrid Cloud infrastructure that works on top of VCloud and
          VCenter (VMWare), AWS, Azure and Veeam. Starting from a legacy code base, we
          refactored module by module to a new modern and
          scalable architecture. I was responsible for recruiting staff too. The technologies we used were
          Java and Golang for the backend, Angular for the
          frontend and Docker and Kubernetes for packaging and
          deployment. The integration with the Cloud infrastructure
          was done directly through VCenter and VCloud API (an other vendors),
          together with an event broker that triggers serverless
          functions based on OpenFaaS.<br /><br />
          
          I was as well responsible of SecDevOps implementation, defining CI/CD pipelines for: building software components, build docker images, assess quality code, assess security of the code, dependencies and Docker images. I built pipelines for automatic deployment 
          in different environments (staging, production and testing), using Gitlab CI/CD.`,
    tags: [
      'CI/CD',
      'DevOps',
      'product',
      'kubernetes',
      '🐋 docker',
      'management',
      'security',
      '☕ java',
      'angular',
      'react',
      'vmware',
      'nodejs',
      'MySQL',
      'Elasticsearch',
      'openfaas',
      'InfluxDB',
    ],
    language: '🇪🇸 spanish • remote',
  },
  {
    id: 3,
    position: 'Principal Engineer & Head of Cybersecurity Research Group',
    company: 'Instituto Tecnológico de Informática',
    companyUrl: 'https://www.iti.es/',
    date: 'oct 2019 - nov 2021 (2 years and 1 month)',
    image: '/static/images/companies/iti.png',
    body: `Technical Leader, responsible for opening a new line of work on cybersecurity, focusing on application security and Cloud environments and using new security paradigms,
    based on Machine Learning, Big Data, SecDevOps and Security as a Code. Those works were part of different research projects, in which the OPOSSUM
    project highlights, as I coordinated a technical team to develop technology based on Machine Learning to improve the security of the applications, through a next-generation
    Web Application & API Protection (WAAP) prototype, using Rust, Java, Angular, Kubernetes, NodeJS and Docker as technologies<br/><br/>
    
    Also, I was working on projects related to data and AI on the following sectors: energy, manufacturing, automotive and software. <a href="_blank" class="underline">Specially interesting was the ZDMP project</a>, an european
    R&D project aimed to achieve a Zero Defect Manufacturing Processes. I was the technical manager of a <a href="_blank" href="https://software.zdmp.eu/docs/overview/" class="underline">consortium of 35 partners</a> 
    like FORD Spain, Software AG, Mondragon Assembly, Continental, among others. Also, I was the principal engineer of the AI Analytics Runtime, a core component in the ZDMP architecture
    responsible of the training and versioning of models. ZDMP architecture was heavily inspired on <b>Kubeflow</b>. As technical manager, I drove the technical culture of the project, 
    laying the foundation of the architecture, the pipelines and the collaboration rules between the consortium.<br/><br/>

    Finally, I was responsible as well of SecDevOps implementation, defining CI/CD pipelines for: building software components, build docker images, assess quality code, assess security of the code, dependencies and Docker images. I built pipelines for automatic deployment 
    in different environments (staging, production and testing), using Gitlab CI/CD. As the project had data science and AI implications, we used Kubeflow to configure and define 
    the pipelines related to data science and AI, covering the following phases of the AI pipeline: data acquisition and cleaning, data processing, data enrichment, training,
    packaging and deployment into production.`,
    tags: [
      'CI/CD',
      'Kubeflow',
      'R&D',
      'product',
      'management',
      'technical leadership',
      'cybersecurity',
      '🦀 rust',
      '☕ java',
      'angular',
      'react',
      'kubernetes',
      'nodejs',
      '🐋 docker',
      '🤖 AI',
      'PostgreSQL',
      'Cassandra',
      'MongoDB',
      'Elasticsearch',
      'MySQL',
    ],
    language: '🇬🇧 english • 🇪🇸 spanish • hybrid remote',
  },
  {
    id: 4,
    position: 'Head of Engineering',
    company: 'Instituto Tecnológico de Informática',
    companyUrl: 'https://www.iti.es/',
    date: 'ene 2018 - jun 2019 (1 year and 6 months)',
    image: '/static/images/companies/iti.png',
    body: `Responsible for the technical execution and software engineering of all ITI R&D projects. Management of a technical team of 26 engineers. Big Data, Machine Learning,
    IoT, Cloud Computing, choice of technologies and SecDevOps. Promoter of Open Source initiatives.<br/><br/>
       
    I was responsible as well of SecDevOps implementation, defining CI/CD pipelines for: building software components, build docker images, assess quality code, assess security of the code, dependencies and Docker images. I built pipelines for automatic deployment 
    in different environments (staging, production and testing), using Gitlab CI/CD. As many projects project had data science and AI implications, we used Kubeflow to configure and define 
    the pipelines related to data science and AI, covering the following phases of the pipeline: data acquisition and cleaning, data processing, data enrichment, training,
    packaging and deployment into production.<br/><br/>

    Also, combining it with my management tasks, I participated in research projects in different sectors such as the <b>industrial sector</b> and the <b>health sector</b>. Regarding the latter, the BigSalud and Helpsalud projects stand out, 
    in which I designed, configured and deployed Big Data processing infrastructure to support the processing of different information, such as medical imaging and genomic streams, with the aim of training Machine Learning models for early detection of 
    certain diseases such as breast cancer, using technologies as Spark, Hadoop, HDFS, Kafka, ActiveMQ or Kibana, among others.
    
    Finally, I was a proactive agent in the company's internal training, teaching more than 15 courses (many of them, with multiple editions), and thus training all the company's engineers in topics such as frontend (react, angular), backend (java , hibernate, node, nestjs), 
    infrastructure (docker, kubernetes) and security (ENS, SecDevOps). These courses were offered as well for external companies.`,
    tags: [
      'CI/CD',
      'Kubeflow',
      'R&D',
      'leadership',
      'big data',
      '🤖 AI',
      'management',
      'nestjs',
      'nodejs',
      'angular',
      'react',
      'python',
      'spark',
      'cloud',
      '☕ java',
      '🐋 docker',
      'PostgreSQL',
      'Cassandra',
      'MongoDB',
      'Elasticsearch',
      'MySQL',
    ],
    language: '🇬🇧 english • 🇪🇸 spanish • on-site',
  },
  {
    id: 5,
    position: 'Professor',
    company: 'Univesitat Politécnica de València',
    companyUrl: 'https://www.upv.es/en',
    date: '2021 - 2022',
    image: '/static/images/companies/upv.jpg',
    body: `Professor of the subject "Machine Learning applied to
    Cybersecurity" at Big Data Analytics Master`,
    tags: ['python', 'data analytics', '🤖 AI', 'cybersecurity', 'jupyter'],
    language: '🇪🇸 spanish • on-site',
  },
  {
    id: 6,
    position: 'Professor',
    company: 'Univesidad de Mondragón',
    companyUrl: 'https://www.mondragon.edu/en/home',
    date: '2021 - 2022',
    image: '/static/images/companies/mondragon.png',
    body: `Professor of the subject "Cybersecurity in the Cloud" at
    University Expert Course in the National Security Scheme (ENS)`,
    tags: ['cloud cybersecurity', 'ens', 'nist'],
    language: '🇪🇸 spanish • remote',
  },
  {
    id: 8,
    position: 'CTO & Co-Founder',
    company: 'Bioscore Sustainability',
    companyUrl: 'https://bioscore.info/',
    date: 'feb 2017 - mar 2018 (1 year and 1 month)',
    image: '/static/images/companies/bioscore.png',
    body: `Architecture, design and head of implementation of a
    travel portal specialized in ecological destinations`,
    tags: [
      'startup',
      'product',
      'leadership',
      'management',
      'security',
      'nestjs',
      'angular',
      'typescript',
      '☕ java',
      '🐋 docker',
      'PostgreSQL',
      'Elasticsearch',
      'MySQL',
      'DB2',
    ],
    language: '🇺🇸 english • 🇪🇸 spanish • on-site',
  },
  {
    id: 9,
    position: 'Software Architect & Team Leader',
    company: 'Instituto Tecnológico de Informática',
    companyUrl: 'https://www.iti.es/',
    date: '2015 - ene 2018 (4 years)',
    image: '/static/images/companies/iti.png',
    body: `Architect and manager of a team of seven engineers.
    Driver of the change to architectures based on
    microservices and front-back decoupling, becoming the
    development standard of the company. Technological
    stack: Java, JPA, Hibernate, JAX-WS, Maven, Spring,
    Angular. Relevant projects: Consum Asset Management,
    BoxPlus, Java applications optimization for Orizon`,
    tags: [
      'CI/CD',
      'team management',
      '☕ java',
      '🐋 docker',
      'enterprise',
      'spring',
      'performance',
      'angular',
      'typescript',
      'PostgreSQL',
      'SQL Server',
      'MySQL',
    ],
    language: '🇪🇸 spanish • on-site',
  },
  {
    id: 10,
    position: 'Software Engineer',
    company: 'Instituto Tecnológico de Informática',
    companyUrl: 'https://www.iti.es/',
    date: '2011 - 2015 (3 years)',
    image: '/static/images/companies/iti.png',
    body: `Java FullStack Developer for end customers and R&D
    projects. Technological stack: Spring, JPA, Hibernate,
    JAX-WS, JSF, JSP, Maven. Deployment on Tomcat and
    JBoss servers. Relevant projects: Episteme, Fet-Eye.eu,
    PangeaMT, Consum Energía`,
    tags: [
      'CI/CD',
      '☕ java',
      'enterprise',
      'spring',
      'liferay',
      'sharepoint',
      'PostgreSQL',
      'SQL Server',
      'MySQL',
    ],
    language: '🇪🇸 spanish • on-site',
  },
  {
    id: 11,
    position: 'Software Engineer',
    company: 'iSOCO',
    companyUrl: 'https://www.linkedin.com/company/isoco-clever/?originalSubdomain=es',
    date: '2008 - 2011 (3 years)',
    image: '/static/images/companies/isoco.png',
    body: `Development of applications in .NET on SharePoint. Java
    application development with Liferay. Direct deal with the
    client, capture of requirements, change and time
    management. Relevant projects: CHGUV, Repsol, Mapfre
    and La Caixa`,
    tags: ['☕ java', 'enterprise', 'spring', 'liferay', 'sharepoint', 'SQL Server', 'MySQL'],
    language: '🇪🇸 spanish • on-site',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <>
      <div className="min-h-full">
        <main className="py-5">
          {/* Page header */}
          <div className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    className="h-32 w-32 rounded-full"
                    src="/static/images/fjbarrena-portrait.png"
                    alt=""
                  />
                  <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold ">Francisco Javier Barrena 🇬🇧 🇪🇸</h1>
                <p className="text-sm font-medium ">
                  Senior Software Architect & Application Security
                </p>
                <p className="mt-2 text-sm">
                  <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>
                      <a href="mailto: fjbarrena@gmail.com">fjbarrena@gmail.com</a>
                    </div>
                    <div>{` • `}</div>
                    <div>+34 660 27 4444</div>
                    <div>{` • `}</div>
                    <div>Valencia, Spain</div>
                  </div>
                </p>
                <p className="mt-2 text-sm">
                  <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>
                      <a href="https://fjbarrena.dev" target="_blank" rel="noreferrer">
                        <img
                          src="/static/images/social-icons/google-chrome-logo.svg"
                          alt="Personal website"
                          className="h-6"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/in/fjbarrena/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/static/images/social-icons/linkedin.png"
                          alt="Linkedin profile"
                          className="h-6"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://es.slideshare.net/fjbarrena"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/static/images/social-icons/slideshare.png"
                          alt="My slides at Slideshare"
                          className="h-6"
                        />
                      </a>
                    </div>
                    <div>
                      <a href="https://twitter.com/DogDeveloper" target="_blank" rel="noreferrer">
                        <img
                          src="/static/images/social-icons/twitter.png"
                          alt="Twitter profile"
                          className="h-6"
                        />
                      </a>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-2 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1">
            <div className="space-y-1 lg:col-span-2 lg:col-start-1">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="sm:rounded-lg">
                  <div className="px-2 py-2 sm:px-2">
                    <p className="mt-1 text-sm">
                      Software architect and developer specialized in scalable systems based on
                      decoupled architectures, microservices and cloud environments. I wore multiple
                      hats in my career, from individual contributor roles, passing through
                      technical leadership of small and big teams, and performing management
                      positions as well as head of engineering and CTO. I love to apply the adequate
                      solution to the current problem, trying to avoid overkilling solutions. I'm
                      also proactive in learning new technologies and paradigms. Pretty obsessed
                      with quality and security in code and infrastructures. Speaker and trainer.
                    </p>
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section aria-labelledby="notes-title">
                <div className="sm:overflow-hidden sm:rounded-lg">
                  <div className="divide-y divide-gray-200">
                    <div className="px-3 py-5 sm:px-3">
                      <h2 id="notes-title" className="text-lg font-medium ">
                        Experience
                      </h2>
                    </div>
                    <div className="px-4 py-6 sm:px-6">
                      <ul role="list" className="space-y-8">
                        {experience.map((item) => (
                          <li key={item.id}>
                            <div className="flex space-x-3">
                              <div className="flex-shrink-0">
                                <img className="w-28" src={`${item.image}`} alt="" />
                              </div>
                              <div>
                                <div className="text-lg">{item.position}</div>
                                <div className="text-sm underline">
                                  <a
                                    href={item.companyUrl}
                                    className="font-medium"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {item.company}
                                  </a>
                                </div>
                                <div className="mb-2 space-x-2 text-sm">
                                  <span className="font-medium ">{item.date}</span>
                                </div>
                                <div className="mt-1 text-sm">
                                  <div dangerouslySetInnerHTML={{ __html: item.body }} />
                                </div>

                                <div className="mt-1 text-sm">
                                  {item.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="mb-1 mr-1 inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                                <div className="mt-1 text-sm">
                                  <p>{item.language}</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Talks */}
              <section aria-labelledby="notes-title">
                <div className="sm:overflow-hidden sm:rounded-lg">
                  <div className="divide-y divide-gray-200">
                    <div className="px-3 py-5 sm:px-3">
                      <h2 id="notes-title" className="text-lg font-medium ">
                        Speaker at events
                      </h2>
                    </div>
                    <div className="px-4 py-6 sm:px-6">
                      <ul role="list" className="space-y-8">
                        {talks.map((item) => (
                          <li key={item.id}>
                            <div className="flex space-x-3">
                              <div className="flex-shrink-0">
                                <img className="w-24" src={`${item.confImageUrl}`} alt="" />
                              </div>
                              <div>
                                <div className="text-lg">
                                  <span className="mb-1 mr-1 inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-sm">
                                    {item.year}
                                  </span>
                                  {item.title}
                                </div>
                                <div className="no-print mb-2 space-x-2 text-sm">
                                  {item.videoUrl && (
                                    <span className="font-medium">
                                      <a href={item.videoUrl} target="_blank" rel="noreferrer">
                                        <img
                                          src="/static/images/youtube.svg"
                                          className="mr-4 h-5 w-5"
                                          alt="Youtube"
                                          style={{ display: 'flex', float: 'left' }}
                                        />
                                      </a>
                                    </span>
                                  )}
                                  {item.slidesUrl && (
                                    <span className="font-medium">
                                      <a href={item.slidesUrl} target="_blank" rel="noreferrer">
                                        <img
                                          src="/static/images/slideshare.png"
                                          className="mr-4 h-5 w-5"
                                          alt="Slideshare"
                                          style={{ display: 'flex', float: 'left' }}
                                        />
                                      </a>
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Courses */}
              <section aria-labelledby="notes-title">
                <div className="sm:overflow-hidden sm:rounded-lg">
                  <div className="divide-y divide-gray-200">
                    <div className="px-3 py-5 sm:px-3">
                      <h2 id="notes-title" className="text-lg font-medium ">
                        Courses taught
                      </h2>
                    </div>
                    <div className="px-4 py-6 sm:px-6">
                      <ul role="list" className="space-y-8">
                        {courses.map((item) => (
                          <li key={item.id}>
                            <div className="flex space-x-3">
                              <div className="w-full">
                                <div className="mt-1 text-sm">
                                  <nav className="h-full overflow-y-auto" aria-label="Directory">
                                    <div className="relative">
                                      <h3>{item.id}</h3>

                                      <ul role="list" className="relative z-0 ">
                                        {item.items.map((c) => (
                                          <li key={c}>
                                            <div className="relative flex items-center space-x-3 px-6 py-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                                              <div className="min-w-0 flex-1">
                                                <a className="focus:outline-none">
                                                  <span
                                                    className="absolute inset-0"
                                                    aria-hidden="true"
                                                  ></span>
                                                  <p className="text-sm font-medium">{c}</p>
                                                </a>
                                              </div>
                                            </div>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </nav>
                                </div>
                                <div className="mt-1 text-sm">
                                  <p>{item.language}</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Complementary Training */}
              <section aria-labelledby="notes-title">
                <div className="sm:overflow-hidden sm:rounded-lg">
                  <div className="divide-y divide-gray-200">
                    <div className="px-3 py-5 sm:px-3">
                      <h2 id="notes-title" className="text-lg font-medium ">
                        Complementary Training
                      </h2>
                    </div>
                    <div className="px-4 py-6 sm:px-6">
                      <ul role="list" className="space-y-8">
                        {training.map((item) => (
                          <li key={item.id}>
                            <div className="flex space-x-3">
                              <div className="w-full">
                                <div className="mt-1 text-sm">
                                  <nav className="h-full overflow-y-auto" aria-label="Directory">
                                    <div className="relative">
                                      <h3>{item.id}</h3>

                                      <ul role="list" className="relative z-0 ">
                                        {item.items.map((c) => (
                                          <li key={c}>
                                            <div className="relative flex items-center space-x-3 px-6 py-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                                              <div className="min-w-0 flex-1">
                                                <a className="focus:outline-none">
                                                  <span
                                                    className="absolute inset-0"
                                                    aria-hidden="true"
                                                  ></span>
                                                  <p className="text-sm font-medium">{c}</p>
                                                </a>
                                              </div>
                                            </div>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </nav>
                                </div>
                                <div className="mt-1 text-sm">
                                  <p>{item.language}</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/*
              <section
                aria-labelledby="timeline-title"
                className="lg:col-span-1 lg:col-start-3"
                style={{ display: 'none' }}
              >
                <div className="px-4 py-5 sm:rounded-lg sm:px-6">
                  <h2 id="timeline-title" className="text-lg font-medium ">
                    English
                  </h2>

                  {/* Activity Feed 
                  <div className="mt-6 flow-root">
                    <ul role="list" className="-mb-8">
                      {/*timeline.map((item, itemIdx) => (
                      <li key={item.id}>
                        <div className="relative pb-8">
                          {itemIdx !== timeline.length - 1 ? (
                            <span
                              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"
                            />
                          ) : null}
                          <div className="relative flex space-x-3">
                            <div>
                              <span
                                className={classNames(
                                  item.type.bgColorClass,
                                  'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                                )}
                              >
                                <item.type.icon className="h-5 w-5 text-white" aria-hidden="true" />
                              </span>
                            </div>
                            <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                              <div>
                                <p className="text-sm ">
                                  {item.content}{' '}
                                  <a href="#" className="font-medium ">
                                    {item.target}
                                  </a>
                                </p>
                              </div>
                              <div className="whitespace-nowrap text-right text-sm ">
                                <time dateTime={item.datetime}>{item.date}</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                                ))
                    </ul>
                  </div>
                  <div className="justify-stretch mt-6 flex flex-col">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Advance to offer
                    </button>
                  </div>
                </div>
              </section>
                                */}
          </div>
        </main>
      </div>
    </>
  )
}
