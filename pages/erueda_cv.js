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
      'UX Design in Digital Products - Udemy',
      'UX: Master in Web Design and User Experience - Udemy',
    ],
  },
  {
    id: 2020,
    items: [
      'ISTQB Certified Tester Foundation Level - International Software Testing Qualifications Board',
    ],
  },
  {
    id: 2019,
    items: ['Computer Science - Polytechnic University of Valencia (UPV)'],
  },
  {
    id: 2010,
    items: [
      `Official Master's Degree in General Health Psychology - University of Valencia (UV)`,
      `Official Master's Degree in Advances in Research and Treatments in Psychopathology and Health - University of Valencia (UV)`,
    ],
  },
  {
    id: 2009,
    items: ['Degree in Psychology - University of Valencia (UV)'],
  },
]

const experience = [
  {
    id: 1,
    position: 'QA Lead & Functional Analyst',
    company: 'Kyso Inc.',
    companyUrl: 'https://about.kyso.io',
    date: 'feb 2022 - act',
    image: '/static/images/companies/kyso.svg',
    body: `<a href="https://about.kyso.io" target="_blank" class="underline font-bold">Kyso</a> is an early stage b2b data science startup with a fast growing team backed by some 
    great investors like Techstars, Lunar Ventures, Tribal Ventures and more.<br/><br/>
    As <b>QA Lead and Functional Analyst</b> I was responsible for the  quality assurance of Kyso's products, the definition of quality processes in 
    the company and the writing of the functional specifications of the product, reporting directly to CTO. <br/><br/>
    These are my main tasks:
    <ul class="list-disc pl-10 pt-2 pb-15">
        <li>
          Define and execute detailed testing plan for every component of Kyso's product. Test plan is documented using Testlink with more than 200 specs.
        </li>
        <li>
          Document and establish test culture at company level
        </li>
        <li>
          Functional analysis and documentation
        </li>
        <li>
          Regularly reporting to management about the overall quality of the product, giving advice on which parts of the product need more attention.
        </li>
        <li>
          API automatic testing definition using BDD approach with Gherkin and Cucumber, translated to Jest and Typescript.
        </li>
        <li>
          UX Designer, working closely with Product Lead to design UI components and to define UX criteria to be assessed in QA.
        </li>
        <li>
          Working closely with Product Lead and CTO, I was involved in feature definition and impact assessments.
        </li>
        <li>
          Mockups and Wireframing
        </li>
    </ul>
    `,
    tags: [
      'QA',
      'Testlink',
      'Agile',
      'Product',
      'BDD',
      'Integration Testing',
      'Gherkin',
      'Cucumber',
      'Regression Test',
      'Functional Analyst',
      'Microservices',
      'Best Practices',
      'Testing Methodologies',
      'Gitlab',
      'Kanban',
      'Trello',
      'Adobe XD',
      'Balsamiq Mockups',
      'MongoDB',
      'Postman',
    ],
    language: '🇬🇧 english • remote',
  },
  {
    id: 3,
    position: 'Senior QA Analyst & UX Lead',
    company: 'Instituto Tecnológico de Informática',
    companyUrl: 'https://www.iti.es/',
    date: 'may 2018 - feb 2022 (3 years and 10 months)',
    image: '/static/images/companies/iti.png',
    body: `Responsible of functional QA and Lead UX Design for several customers in different sectors like distribution, healthcare and R&D. Working in agile environments. My main tasks were related to:
    <ul class="list-disc  pl-10 pt-2 pb-5">
      <li>
        Lead UX Designer managing a multi-vendor team to design, build and ensure UX consistency along several web and mobile applications for a large distribution company.
      </li>
      <li>
        Information architecture design and implementation
      </li>
      <li>
        QA assurance for large enterprise web and mobile applications, some of them based on design systems, ensuring that established criteria are met by inspecting HTML and CSS in production environments. 
      </li>
      <li>
        QA assurance for important R&D projects (national and regional), highlighting projects like FACOP (optimization algorithms) and RADIATUS (big data data processing platform).
      </li>
      <li>
        API's automatic testing using OpenAPI/Swagger, Postman and Jest.
      </li>
      <li>
        QA assurance of medical devices, with high quality requirements .
      </li>
      <li>
        Working with several databases as SQL Server, DB2 and MySQL.
      </li>
      <li>
        Mockups, Wireframing and design of web and mobile applications using Balsamiq Mockups and Adobe XD
      </li>
      <li>
        Requirements capture working directly with customers. Responsible of writing down functional requirement documents
      </li>
      <li>
        Testing plan design (functional and UX) using different test management software as TestLink, Azure DevOps and Rally.
      </li>
      <li>
        Design and implementation of a Design System for R&D department to be used in every project (around 40 projects per year). Static website generation using Hugo and Markdown.
      </li>
      <li>
        Management of the integral test cycle, direct contact with the client and conflict resolution. Ticket reporting in different defect managers, such as Trac, Gitlab, Azure DevOps or Rally.
      </li>
    </ul>
    `,
    tags: [
      'QA',
      'Functional Analyst',
      'UX Design',
      'Testlink',
      'Agile',
      'BDD',
      'Design System',
      'Integration Testing',
      'Gherkin',
      'Cucumber',
      'Regression Test',
      'Functional Analyst',
      'Microservices',
      'Best Practices',
      'Testing Methodologies',
      'Gitlab',
      'Kanban',
      'Adobe XD',
      'Balsamiq Mockups',
      'MongoDB',
      'Postman',
      'OpenAPI',
      'Trac',
      'Azure Devops',
      'Rally',
    ],
    language: '🇪🇸 spanish • hybrid remote',
  },
  {
    id: 3,
    position: 'Functional QA & Functional Analyst',
    company: 'Instituto Tecnológico de Informática',
    companyUrl: 'https://www.iti.es/',
    date: 'may 2015 - may 2018 (3 years)',
    image: '/static/images/companies/iti.png',
    body: `Functional QA and UX Designer for several customers like Iberdrola (energetic sector), Consum (distribution sector) and City Hall of Alboraya (public sector), among other sectors (healthcare, IT and tourism).<br/><br/>
    Responsible of functional testing, following ISTQB principles and specific testing tools, like Testlink and Rally, for large enterprise applications with high quality standards. Worked closely with data team, helping them to build a process to migrate large amount of data collections from Oracle to SQL Server.<br/><br/>
    As UX Designer, responsible of the user-centric design of several websites, in addition to information architecture, mockups and prototypes, using tools like Corel Draw, Inskscape, Figma and Balsamiq Mockups.
    `,
    tags: [
      'QA',
      'Functional Analyst',
      'UX Design',
      'Testlink',
      'Agile',
      'ISTQB',
      'Corel Draw',
      'Inkscape',
      'Regression Test',
      'Functional Analyst',
      'Testing Methodologies',
      'Kanban',
      'Balsamiq Mockups',
      'Trac',
      'Azure Devops',
      'Rally',
      'Testlink',
    ],
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
                    src="/static/portraits/erueda.jpeg"
                    alt=""
                  />
                  <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold ">Elena Rueda Ravasco</h1>
                <p className="text-sm font-medium ">QA Engineer & Functional Analyst</p>
                <p className="mt-2 text-sm">
                  <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>
                      <a href="mailto: elena.rueda.ravasco@gmail.com">
                        elena.rueda.ravasco@gmail.com
                      </a>
                    </div>
                    <div>{` • `}</div>
                    <div>+34 618 085 197</div>
                    <div>{` • `}</div>
                    <div>Valencia, Spain</div>
                  </div>
                </p>
                <p className="mt-2 text-sm">
                  <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>
                      <a
                        href="https://www.linkedin.com/in/elena-rueda-6a8a49207/"
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
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-2 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1">
            <div className="space-y-1 lg:col-span-2 lg:col-start-1">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="mt-5 sm:rounded-lg">
                  <div className="px-2 py-2 sm:px-2">
                    <p className="mt-1 text-justify text-sm">
                      <b>QA Engineer</b> specialized in <b>Functional Analysis</b> and <b>UX</b>.
                      Very interested in the management of the integral test cycle and the
                      management of projects and their functional definition, from a quality
                      perspective. Proactive in the implementation of <b>Design Systems</b> and in
                      the exhaustive definition of <b>test plans</b>. Facilitator of implementation
                      of <b>agile methodologies</b>, and in implementing quality processes from the
                      conception of the project (functional analysis, capture of requirements,
                      design...), in its execution (test plan, execution of test iterations, BDD,
                      integration tests...) and until its completion (acceptance plan,
                      maintenance...)
                    </p>
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section aria-labelledby="notes-title">
                <div className="mt-10 sm:overflow-hidden sm:rounded-lg">
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
                        Languages
                      </h2>
                    </div>
                    <div className="px-4 py-6 sm:px-6">
                      <ul role="list" className="space-y-8">
                        🇪🇸 Spanish - Native <br />
                        🇫🇷 French - Native <br />
                        🇬🇧 English - B2 <br />
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
                        Education and Courses
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
