import Profile from '../../assets/json/profile.js'
import TogglerAngle from '@components/icons/TogglerAngle'
import RepositoryCard from '@components/projects/RepositoryCard'
import { RepositoriesGraphQLResponse } from 'src/models/RepositoriesResponse'
import { useEffect, useState } from 'react'

const Repositories: React.FC = ({ token }: ImportMetaEnv) => {
    const { title, subtitle } = Profile.projects
    const mySelector: string = '#projects-component.repostiories-component'
    const graphQLQuery =
        `query {
            viewer {
              repositories(first: 100) {
                totalCount
                nodes {
                    name
                    id
                    isPrivate
                    url
                    description
                    languages(first: 10) {
                        nodes {
                            color
                            name
                            id
                        }
                    }
                }
              }
            }
          }`
    const endpoint: string = 'https://api.github.com/graphql'
    const [repositories, setRepositories] = useState<RepositoriesGraphQLResponse>()

    useEffect(() => {
        getRepositories<RepositoriesGraphQLResponse>().then(repos => setRepositories(repos))
    }, [])

    async function getRepositories<T>(): Promise<T> {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    query: graphQLQuery
                })
            })
            return await response.json()
        } catch (error) {
            throw new TypeError(error)
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
        </section>
    )
}

export default Repositories
