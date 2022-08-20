import Html from '@components/icons/Html.astro'
import Css from '@components/icons/Css.astro'
import JavaScript from '@components/icons/JavaScript.astro'
import React from '@components/icons/React.astro'
import Angular from '@components/icons/Angular.astro'
import Bootstrap from '@components/icons/Bootstrap.astro'
import Tailwind from '@components/icons/Tailwind.astro'
import Sass from '@components/icons/Sass.astro'
import Php from '@components/icons/Php.astro'
import Nodejs from '@components/icons/Nodejs.astro'
import Kotlin from '@components/icons/Kotlin.astro'
import Laravel from '@components/icons/Laravel.astro'
import Symfony from '@components/icons/Symfony.astro'
import Express from '@components/icons/Express.astro'
import Mysql from '@components/icons/Mysql.astro'
import Postgres from '@components/icons/Postgres.astro'
import Mongo from '@components/icons/Mongo.astro'
import Apache from '@components/icons/Apache.astro'
import Nginx from '@components/icons/Nginx.astro'
import Docker from '@components/icons/Docker.astro'
import Vscode from '@components/icons/Vscode.astro'
import Bash from '@components/icons/Bash.astro'
import Git from '@components/icons/Git.astro'
import Github from '@components/icons/Github.astro'
import Gitlab from '@components/icons/Gitlab.astro'
import Uoc from '@components/icons/Uoc.astro'
import Udemy from '@components/icons/Udemy.astro'
import Salesforce from '@components/icons/Salesforce.astro'
import HighSchool from '@components/icons/HighSchool.astro'
import B2CDev from '@components/icons/B2CDev.astro'

const Profile = {
    profile: {
        title: '{ "name": "Ivan Moll" }',
        subtitle: 'Software Engineer',
        mySelf: {
            title: 'My Self',
            subtitle: 'What I think by myself 👨🏻‍💻',
            content: 'Hello World! 👋🏻, my name is Ivan Moll, I\'m from 📍 Menorca - Spain. I\'m a Software 👨🏻‍💻 Engineer, my passion is developing and web 🕸 technologies. I like learning new 🧑🏻‍🏫 things every day, challenges and investigating new outlooks. I consider myself persevering, self-taught, tidy, resolute and also a person that likes working in a team.'
        },
        hardSkills: {
            title: 'Hard Skills',
            subtitle: 'Things in my head 📚',
            techs: [
                {
                    value: 'Frontend',
                    icons: [Html, Css, JavaScript]
                },
                {
                    value: 'Frontend frameworks/lib',
                    icons: [React, Angular, Bootstrap, Tailwind, Sass]
                },
                {
                    value: 'Backend',
                    icons: [Php, Nodejs, Kotlin, Salesforce]
                },
                {
                    value: 'Backend frameworks/lib',
                    icons: [Laravel, Symfony, Express]
                },
                {
                    value: 'Storage sys',
                    icons: [Mysql, Postgres, Mongo]
                },
                {
                    value: 'Infrastructure',
                    icons: [Apache, Nginx, Docker]
                },
                {
                    value: 'Utilities',
                    icons: [Vscode, Bash, Git, Github, Gitlab]
                }
            ]
        },
        softSkills: {
            title: 'Soft Skills',
            subtitle: 'How I went to the world 🌍',
            content: [
                {
                    value: 'Communication 📢',
                    description: 'I know that in the tech world the communication is fundamental, I have a good communications skills.'
                },
                {
                    value: 'Professionalism 👨🏻‍💻',
                    description: 'Every time we have to be professional, I consider myself a professional doing the things on the best way.'
                },
                {
                    value: 'Responsibility 📌',
                    description: 'I\'m very responsible about my work and also I take care of the different tasks that I have to do.'
                },
                {
                    value: 'Teamwork skills 🧑‍🤝‍🧑🧑‍🤝‍🧑',
                    description: 'I\'m consider that I have a good teamwork skills, in this world I know that we constantly work with another members. I try to give my best to the others mates when they have a problem or something similar. It\'s an important point in a tech team.'
                },
                {
                    value: 'Commitment ☑️',
                    description: 'I\'m a very commitment person in my studies and also in my work. This means greater motivation, concentration, quality of work and, therefore, productivity.'
                },
                {
                    value: 'Constant and independent learning 📚',
                    description: 'I have the desire to constantly learn, I think it\'s essential to have the ability to learn about new technologies, programs and systems. Key to today\'s workplace.'
                }
            ]
        }
    },
    education: {
        title: 'Education',
        studies: {
            title: 'Studies',
            subtitle: 'What I\'ve studied in my career 👨🏻‍🎓',
            items: [
                {
                    title: 'Bachelor\'s degree in Computer Engineering',
                    center: 'Universitat Oberta de Catalunya',
                    location: 'Barcelona - Remotly',
                    fromTo: '2016 - 2022',
                    description: 'Specialised in Software Engineering',
                    Icon: Uoc,
                    link: ''
                },
                {
                    title: 'Higher Technical Certificate in Sys Admin',
                    center: 'High School Joan Ramis i Ramis',
                    location: 'Mahón Menorca - Balearic Islands',
                    fromTo: '2007 - 2009',
                    description: 'Specialised in Linux Servers and networking',
                    Icon: HighSchool,
                    link: 'https://drive.google.com/file/d/1DmbLHVwIGTmUie2cszr2z9uMRZXjz_BG/view?usp=sharing'
                }
            ],
        },
        licences: {
            title: 'Licences',
            subtitle: 'My certificates 🔖',
            items: [
                {
                    title: 'Salesforce B2C Commerce Cloud Developer.',
                    center: 'Salesforce',
                    location: '',
                    fromTo: 'aug. 2022',
                    description: 'Official certification for a B2C Commerce Cloud Developer',
                    Icon: B2CDev,
                    link: 'https://drive.google.com/file/d/18M4nsq9Pi0milNYHQfv1DTVF0u4EzRv-/view?usp=sharing'
                },
                {
                    title: 'Master in PHP, SQL, POO, MVC, Laravel, Symfony, Wordpress.',
                    center: 'Udemy',
                    location: '',
                    fromTo: 'sept. 2020',
                    description: 'Worked with PHP ecosystem, learnt principal frameworks and the top CRM in the world.',
                    Icon: Udemy,
                    link: 'http://ude.my/UC-181f4326-553b-4856-8504-bb9db3b0096d'
                },
                {
                    title: 'Master in Javascript, jQuery, Angular, MongoDB, TypeScript, NodeJS, MEAN.',
                    center: 'Udemy',
                    location: '',
                    fromTo: 'jul. 2019',
                    description: 'Full Stack Tech of JavaScript, worked with backend and frontend.',
                    Icon: Udemy,
                    link: 'http://ude.my/UC-0UJQ9NSY'
                },
                {
                    title: 'Web development from zero to advanced.',
                    center: 'Udemy',
                    location: '',
                    fromTo: 'sept. 2018',
                    description: 'Design and develop a website from zero to advanced.',
                    Icon: Udemy,
                    link: 'http://ude.my/UC-CLZRXVIO'
                }
            ]
        }
    },
    experience: {
        title: 'Jobs',
        subtitle: 'I\'ve worked hard on all my roles 💪🏻',
        jobs: [
            {
                role: 'Full Stack Engineer',
                company: 'OSF Digital',
                howLong: 'sept. 2021 - actually · 1 year',
                description: 'Develop an innovation project with SFCC technology, work on backend and frontend. Rebranding project of Mahou San Miguel, work with SFCC technology on backend and frontend.'
            },
            {
                role: 'Full Stack Developer PHP & JS',
                company: 'Ximdex Evolution',
                howLong: 'nov. 2020 - ene. 2021 · 3 months',
                description: 'Develop educational frontend app with JavaScript. Maintenance of educational frontend app with Angular. Refactor and maintenance of a CMS with PHP.'
            },
            {
                role: 'Systems Administrator',
                company: 'Top Markets',
                howLong: 'apr. 2019 - nov. 2020 · 1 year 8 months',
                description: 'I worked with Windows Server/Windows and networking ecosystems, configuring all the workstations in the domain and network nodes, also I setup/configured printers to work in network mode.'
            },
            {
                role: 'Software Developer',
                company: 'Freelance',
                howLong: 'aug. 2016 - nov. 2020 · 4 years 4 months',
                description: 'Backend development with PHP and its frameworks Laravel and Symfony, also I worked with NodeJS and Express. Also I worked with databases like MySQL and MongoDB. Frontend development with HTML, CSS, Bootstrap, Vanilla JS, jQuery. Deployments following the philosophy CI/CD with GitHub Actions, also using a VPS Server with Docker.'
            },
        ]
    }
}

export default Profile