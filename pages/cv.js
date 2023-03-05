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
    id: 1,
    position: 'CTO',
    company: 'Kyso Inc.',
    companyUrl: 'https://about.kyso.io',
    date: 'nov 2021 - act',
    image: '/static/images/companies/kyso.svg',
    body: 'Kyso is an early stage b2b data science startup with a fast growing team backed by some great investors like Techstars, Lunar Ventures, Tribal Ventures and more. Responsible for the engineering side of the company and member of the executive. I wore many hats, from product owner, security, architecture, development and management. I was in charge of technical customer relations. We implemented from scratch the technical culture of the company with very good results',
    tags: [
      'leadership',
      'docker',
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
    ],
    language: '🇺🇸 english',
  },
  {
    id: 2,
    position: 'Software Architect',
    company: 'Nexica Econocom',
    companyUrl: 'https://www.nexica.com/',
    date: 'oct 2019 - nov 2021',
    image: '/static/images/companies/nexica.png',
    body: `Responsible for the refactoring of the CloudManager
          (website and public documentation), a tool to manage
          Cloud infrastructure that works on top of VCloud and
          VCenter (VMWare). Starting from a legacy code base, we
          are refactoring module by module to a new modern and
          scalable architecture. The technologies we are using are
          Java and Golang for the backend part, Angular for the
          frontend and Docker and Kubernetes for packaging and
          deployment. The integration with the Cloud infrastructure
          is done directly through the VCenter and VCloud API,
          together with an event broker that triggers serverless
          functions based on OpenFaaS.`,
    tags: [
      'kubernetes',
      'docker',
      'management',
      'security',
      'java',
      'angular',
      'vmware',
      'nodejs',
      'elasticsearch',
      'openfaas',
    ],
    language: '🇪🇸 spanish',
  },
  {
    id: 3,
    position: 'Head of Cybersecurity Research Group',
    company: 'Instituto Tecnológico de Informática',
    companyUrl: 'https://www.iti.es/',
    date: 'feb 2020 - nov 2021',
    image: '/static/images/companies/iti.png',
    body: `Technical Leader, responsible for opening a new line of
    work on cybersecurity, focusing on application security
    and Cloud environments using new security paradigms,
    based on Machine Learning, Big Data, DevSecOps and
    Security as a Code. These works are part of different
    research projects, in which the European's project ZDMP
    highlights. My role in ZDMP is Technical Manager,
    coordinating the technical efforts of more than 15
    European partners. It also highlights the OPOSSUM
    project, in which I coordinate a technical team to develop
    technology based on Machine Learning to improve the
    security of the applications, through a next-generation
    Web Application & API Protection (WAAP) prototype,
    using the following technologies: Rust, Java, Angular,
    Kubernetes, NodeJS and Docker`,
    tags: [
      'leadership',
      'cybersecurity',
      'cloud security',
      'management',
      'rust',
      'java',
      'angular',
      'kubernetes',
      'nodejs',
      'docker',
    ],
    language: '🇬🇧 english & 🇪🇸 spanish',
  },
  {
    id: 4,
    position: 'Professor',
    company: 'Univesitat Politécnica de València',
    companyUrl: 'https://www.upv.es/en',
    date: '2021 - 2022',
    image: '/static/images/companies/upv.jpg',
    body: `Professor of the subject "Machine Learning applied to
    Cybersecurity" at Big Data Analytics Master`,
    tags: ['python', 'data analytics', 'AI', 'cybersecurity', 'jupyter'],
    language: '🇪🇸 spanish',
  },
  {
    id: 5,
    position: 'Professor',
    company: 'Univesidad de Mondragón',
    companyUrl: 'https://www.mondragon.edu/en/home',
    date: '2021 - 2022',
    image: '/static/images/companies/mondragon.png',
    body: `Professor of the subject "Cybersecurity in the Cloud" at
    University Expert Course in the National Security Scheme (ENS)`,
    tags: ['cloud cybersecurity', 'ens', 'nist'],
    language: '🇪🇸 spanish',
  },
  {
    id: 6,
    position: 'Software Architect',
    company: 'GFT',
    companyUrl: 'https://www.gft.com/int/en/',
    date: 'jun 2019 - feb 2020',
    image: '/static/images/companies/gft.png',
    body: `Software architect for projects related to the banking
    sector. I worked with a team of international and offshored
    technicians and managers, using agile methodologies.
    Our technology stack was based on Java for the backend
    part, and React for the frontend part. Participated in
    integration projects with other banking platforms using
    REST APIs.`,
    tags: ['banking', 'java', 'react', 'agile'],
    language: '🇬🇧 english',
  },
  {
    id: 7,
    position: 'Head of Engineering',
    company: 'Instituto Tecnológico de Informática',
    companyUrl: 'https://www.iti.es/',
    date: 'ene 2018 - jun 2019',
    image: '/static/images/companies/iti.png',
    body: `Responsible for the technical execution and software
    engineering of all ITI R&D projects. Management of a
    technical team of 26 people. Big Data, Machine Learning,
    IoT, Cloud Computing, choice of technologies and
    DevOps. Promoter of Open Source initiatives. Relevant
    projects: Radiatus, Kancerbero, SaaSDK`,
    tags: [
      'leadership',
      'big data',
      'AI',
      'management',
      'R&D',
      'nestjs',
      'nodejs',
      'angular',
      'react',
      'python',
      'spark',
      'cloud',
    ],
    language: '🇬🇧 english & 🇪🇸 spanish',
  },
  {
    id: 8,
    position: 'CTO & Co-Founder',
    company: 'Bioscore Sustainability',
    companyUrl: 'https://bioscore.info/',
    date: 'feb 2017 - mar 2018',
    image: '/static/images/companies/bioscore.png',
    body: `Architecture, design and head of implementation of a
    travel portal specialized in ecological destinations`,
    tags: [
      'startup',
      'leadership',
      'management',
      'security',
      'nestjs',
      'angular',
      'typescript',
      'java',
    ],
    language: '🇺🇸 english & 🇪🇸 spanish',
  },
  {
    id: 9,
    position: 'Software Architect & Team Leader',
    company: 'Instituto Tecnológico de Informática',
    companyUrl: 'https://www.iti.es/',
    date: '2015 - ene 2018',
    image: '/static/images/companies/iti.png',
    body: `Architect and manager of a team of seven engineers.
    Driver of the change to architectures based on
    microservices and front-back decoupling, becoming the
    development standard of the company. Technological
    stack: Java, JPA, Hibernate, JAX-WS, Maven, Spring,
    Angular. Relevant projects: Consum Asset Management,
    BoxPlus, Java applications optimization for Orizon`,
    tags: [
      'team management',
      'java',
      'enterprise',
      'spring',
      'performance',
      'angular',
      'typescript',
    ],
    language: '🇪🇸 spanish',
  },
  {
    id: 10,
    position: 'Software Engineer',
    company: 'Instituto Tecnológico de Informática',
    companyUrl: 'https://www.iti.es/',
    date: '2011 - 2015',
    image: '/static/images/companies/iti.png',
    body: `Java FullStack Developer for end customers and R&D
    projects. Technological stack: Spring, JPA, Hibernate,
    JAX-WS, JSF, JSP, Maven. Deployment on Tomcat and
    JBoss servers. Relevant projects: Episteme, Fet-Eye.eu,
    PangeaMT, Consum Energía`,
    tags: ['java', 'enterprise', 'spring', 'liferay', 'sharepoint'],
    language: '🇪🇸 spanish',
  },
  {
    id: 11,
    position: 'Software Engineer',
    company: 'iSOCO',
    companyUrl: 'https://www.linkedin.com/company/isoco-clever/?originalSubdomain=es',
    date: '2008 - 2011',
    image: '/static/images/companies/isoco.png',
    body: `Development of applications in .NET on SharePoint. Java
    application development with Liferay. Direct deal with the
    client, capture of requirements, change and time
    management. Relevant projects: CHGUV, Repsol, Mapfre
    and La Caixa`,
    tags: ['java', 'enterprise', 'spring', 'liferay', 'sharepoint'],
    language: '🇪🇸 spanish',
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
        <main className="py-10">
          {/* Page header */}
          <div className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <Image
                    className="h-16 w-16 rounded-full"
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
                      <a href="https://www.linkedin.com/in/fjbarrena/">
                        https://www.linkedin.com/in/fjbarrena/
                      </a>
                    </div>
                    <div>{` • `}</div>
                    <div>
                      <a href="https://fjbarrena.dev">https://fjbarrena.dev/</a>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-2 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-1 lg:col-span-2 lg:col-start-1">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="sm:rounded-lg">
                  <div className="px-2 py-2 sm:px-2">
                    <p className="mt-1 max-w-2xl text-sm">
                      Software architect and developer specialized in scalable systems based on
                      decoupled architectures, microservices and cloud environments. Proactive in
                      learning new technologies and software development paradigms, as well as
                      quality and security in code and infrastructures. Speaker and trainer.
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
                                <Image className="w-28" src={`${item.image}`} alt="" />
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
                                  <p>{item.body}</p>
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
                        Pitches
                      </h2>
                    </div>
                    <div className="px-4 py-6 sm:px-6">
                      <ul role="list" className="space-y-8">
                        {talks.map((item) => (
                          <li key={item.id}>
                            <div className="flex space-x-3">
                              <div className="flex-shrink-0">
                                <Image className="w-24" src={`${item.confImageUrl}`} alt="" />
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
                                        <Image
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
                                        <Image
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

            {
              <section
                aria-labelledby="timeline-title"
                className="lg:col-span-1 lg:col-start-3"
                style={{ display: 'none' }}
              >
                <div className="px-4 py-5 sm:rounded-lg sm:px-6">
                  <h2 id="timeline-title" className="text-lg font-medium ">
                    English
                  </h2>

                  {/* Activity Feed */}
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
                                ))*/}
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
            }
          </div>
        </main>
      </div>
    </>
  )
}
