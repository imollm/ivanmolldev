import GitHubIcon from './GitHubIcon'
import { Repository } from '../../models/RepositoriesResponse'
import RepoLanguages from './RepoLanguages'

interface Props {
    repository: Repository
}

const RepositoryCard: React.FC = ({ repository } : Props) => {
    const { name, description, url, isPrivate, languages } = repository

    return (
        !isPrivate &&
            <a className='repo-details-wrapper'
                href={url}
                target='_blank'
            >
                <article className='repo-card h-full flex flex-col leading-10 rounded overflow-hidden shadow-lg bg-white p-4'>
                    <div className='grid grid-rows-auto'>
                        <div className='flex flex-col items-center bg-white text-center rounded'>
                            <GitHubIcon />
                        </div>
                        <div className='mt-5 text-center'>
                            <span className='text-lg text-zinc-500 font-bold capitalize'>
                                {
                                    name.replaceAll('-', ' ')
                                }
                            </span>
                        </div>
                    </div>
                </article>
                <div className='repo-details bg-zinc-500 rounded'>
                    <div className='flex flex-col justify-evenly p-3'>
                        <div className='flex flex-col gap-1 rounded bg-zinc-100 p-2'>
                            <span className='font-bold'>Description:</span>
                            <span>{ description }</span>
                        </div>
                        <div>
                            <RepoLanguages languages={languages.nodes} />
                        </div>
                    </div>
                </div>
            </a>
    )
}

export default RepositoryCard