import Profile from '../../assets/json/profile.js'
import RepositoryCard from '@components/projects/RepositoryCard'
import { RepositoriesGraphQLResponse } from 'src/models/RepositoriesResponse'
import { useEffect, useState } from 'react'

const Repositories: React.FC = ({ repos }: any) => {
    const { title, subtitle } = Profile.projects

    const [repositories, setRepositories] = useState<RepositoriesGraphQLResponse>()

    useEffect(() => {
        setRepositories(repos)
    }, [repositories])

    return (
        <div id='projects-component' className='repostiories-component bg-zinc-700 rounded p-8'>
            <div className='flex flex-col text-2xl'>
                <span className='text-neutral-300'>
                    {title}
                </span>
                <span className='text-gray-400 text-sm'>
                    {subtitle}
                </span>
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-auto lg:grid-rows-1 grid-rows-2 gap-4 mt-5'>
                {
                    repositories && repositories?.data?.viewer.repositories.nodes.map(repo => {
                        return (
                            <RepositoryCard key={repo.id} repository={repo} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Repositories
