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

const Profile = {
    profile: {
        title: '{ "name": "Ivan Moll" }',
        subtitle: 'Software Engineer',
        mySelf: {
            title: 'My Self',
            subtitle: 'What I think by myself',
            content: 'I\'m a Software Engineer, my passion is developing and web technologies. I like learning new things every day, challenges and investigating new outlooks. I consider myself persevering, self-taught, tidy, resolute and also a person that likes working in a team.',
            footer: 'Footer'
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
                    icons: [Php, Nodejs, Kotlin]
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
            ],
            footer: 'Footer'
        },
        softSkills: {
            title: 'Soft Skills',
            subtitle: 'How I went to the world 🌍',
            content: [
                {
                    value: 'Communication',
                    description: 'I know that in the tech world the communication is fundamental, I have a good communications skills.'
                },
                {
                    value: 'Professionalism',
                    description: 'Every time we have to be professional, I consider myself a professional doing the things on the best way.'
                },
                {
                    value: 'Responsibility',
                    description: 'I\'m very responsible about my work and also I take care of the different tasks that I have to do.'
                },
                {
                    value: 'Teamwork skills',
                    description: 'I\'m consider that I have a good teamwork skills, in this world I know that we constantly work with another members. I try to give my best to the others mates when they have a problem or something similar. It\'s a important point in a tech team.'
                },
                {
                    value: 'Commitment',
                    description: 'I\'m a very commitment person in my studies and also in my work. This means greater motivation, concentration, quality of work and, therefore, productivity.'
                },
                {
                    value: 'Constant and independent learning',
                    description: 'I have the desire to constantly learn, I think it\'s essential to have the ability to learn about new technologies, programs and systems. Key to today\'s workplace.'
                }
            ],
            footer: 'Footer'
        }
    },
    education: {
        title: 'Education',
        subtitle: 'What I studied in my career 👨🏻‍🎓',
        studies: [
            {
                title: 'Bachelor\'s degree in Computer Engineering',
                center: 'Universitat Oberta de Catalunya',
                location: 'Barcelona - Remotly',
                fromTo: '2016 - 2022',
                description: 'Specialised in Software Engineering'
            },
            {
                title: 'Higher Technical Certificate in Sys Admin',
                center: 'High School Joan Ramis i Ramis',
                location: 'Mahón Menorca - Balearic Islands',
                fromTo: '2007 - 2009',
                description: 'Specialised in Linux Servers and networking'
            }
        ],
        licences: [
            {
                title: 'Salesforce B2C Commerce Cloud Developer.',
                center: 'Salesforce',
                location: 'Salesforce',
                fromTo: 'aug. 2022',
                description: 'Official certification for a B2C Commerce Cloud Developer'
            },
            {
                title: 'Master in PHP, SQL, POO, MVC, Laravel, Symfony, Wordpress.',
                center: 'Udemy',
                location: 'Udemy',
                fromTo: 'sept. 2020',
                description: 'Worked with PHP ecosystem, learnt principal frameworks and the top CRM in the world.'
            },
            {
                title: 'Master in Javascript, jQuery, Angular, MongoDB, TypeScript, NodeJS, MEAN.',
                center: 'Udemy',
                location: 'Udemy',
                fromTo: 'jul. 2019',
                description: 'Full Stack Tech of JavaScript, worked with backend and frontend.'
            },
            {
                title: 'Web development from zero to advanced.',
                center: 'Udemy',
                location: 'Udemy',
                fromTo: 'sept. 2018',
                description: 'Design and develop a website from zero to advanced. HTML5, CSS3 and JavaScript.'
            }
        ]
    }
}

export default Profile