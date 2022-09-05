import Profile from '../../assets/json/profile.js'
import TogglerAngle from '@components/icons/TogglerAngle'
import RepositoryCard from '@components/projects/RepositoryCard'
import { useEffect, useState } from 'react'

const Repositories: React.FC = () => {
    const { title, subtitle } = Profile.projects
    const mySelector: string = '#projects-component.repostiories-component'
    const gitHubAPIToken: string = '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'
    const endpoint: string = 'https://api.github.com/user/repos'
    const [repositories, setRespositories] = useState([])

    useEffect(() => {
        getRepositories()
    }, [])

    const getRepositories = async () => {
        try {
            const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    accept: 'application/vnd.github+json',
                    authorization: `token ${gitHubAPIToken}`
                }
            })

            setRespositories(await response.json())
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section id='projects-component' className='repostiories-component bg-zinc-700 rounded p-8'>
            <div className='flex flex-col text-2xl'>
                <div className='flex justify-between'>
                    <span className='text-neutral-300'>
                        {title}
                    </span>
                    <span className='flex items-center'>
                        <TogglerAngle elementToCloseSelector={mySelector} />
                    </span>
                </div>
                <span className='text-gray-400 text-sm text-neutral-300'>
                    {subtitle}
                </span>
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-auto lg:grid-rows-1 grid-rows-2 gap-4 mt-5'>
                {
                    repositories &&
                        repositories.map(repository => {
                            return (
                                <RepositoryCard key={repository.id} repository={repository} />
                            )
                        })
                }
            </div>
        </section>
    )
}

export default Repositories
