import CVTemplateDesign1 from './src/designs/design_one'

const options = {

    profile: {
        description: 'At this moment I work with the booking system on the client, administrative, business owners\' parts. ' +
            'I\'m the only one frontender on the project. The system works in English, Russian, Japanese and Korean. ' +
            'My job is to create new interfaces, support current interfaces, add new functionality, work with designer and backend developer, fix bugs if there are any, ' +
            'sometimes I do translations from Russian to English and vice versa, and support our static site, which is also made by me. ' +
            'I prefer less libraries way of developing. ' +
            '<br /><br /> <b>I do not make emails.</b>'
    },

    header: {
        name: 'Samat Zhetibaev',
        position: 'Frontend developer',
        links: [
            {
                label: 'samat1989@mail.ru',
                url: 'mailto:samat1989@mail.ru',
            },
            {
                label: '+7(964)377-97-77',
                url: 'tel:89643779777',
            },
            {
                label: 'GitHub',
                url: 'https://www.github.com/hellooldfriend',
            },
            {
                label: 'Telegram',
                url: 'https://www.t.me/get_in_touch'
            }

        ],
        locationCity: 'Saint Petersburg',
        locationCountry: 'Russia',
        typeOfWork: 'Full-time', // remotely
        areYouReadyForOffice: false,
        areYouReadyToRelocate: false,
    },

    education: [
        {
            place: "Saint Petersburg's Polytechnic University",
            specialization: 'Management',
            datetimeFrom: '2009',
            datetimeTo: '2014',
            locationCity: 'Saint Petersburg',
            locationCountry: 'Russia',
        },
    ],

    extraEducation: [],

    experience: [
        {
            company: 'TunnelTech',
            companyWebsite: 'https://www.tunneltech.eu',
            position: 'Frontend',
            datetimeFrom: '2017-06-15',
            datetimeTo: null, // null if current
            description: '',
        }
    ],

    skills: {
        experienced: [
            'HTML',
            'CSS',
            'SCSS / SASS',
            'JavaScript',
            'React (before and after hooks)',
            'Git / Mercurial',
        ],

        skillful: [
            'TypeScript',
            'Redux',
            'Webpack / Gulp / Parcel',
        ],

        basic: [
            'Jest / Puppeteer',
            'React Native',
            'Angular',
            'Django templates',
            'Python',
        ],

        other: [
            'GitLab',
            'JIRA',
            'Figma / Zeplin / Photoshop',
            'Firebase',
            'Storybook',
        ]
    },

    languages: [
        {
            language: 'English',
            level: 'B2',
            description: '',
        },
        {
            language: 'Russian',
            level: 'Native',
            description: null,
        }
    ],

    courses: [

    ],

}

new CVTemplateDesign1('root', options)