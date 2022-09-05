import GitHubIcon from './GitHubIcon'
import RepoLanguages from './RepoLanguages'

interface Repository {
    name: string
    html_url: string
    updated_at: string
    watchers: number
    language: string
    topics: [],
    private: boolean
    description: string,
    languages_url: string
}

interface Props {
    repository: Repository
}

const RepositoryCard: React.FC = ({ repository }: Props) => {
    return (
        !repository.private &&
            <a className='repo-details-wrapper'
                href={repository.html_url}
                target='_blank'
            >
                <article className='repo-card h-full flex flex-col leading-10 rounded overflow-hidden shadow-lg bg-white p-4'>
                    <div className='grid grid-rows-auto'>
                        <div className='flex flex-col items-center bg-white text-center rounded'>
                            <GitHubIcon />
                        </div>
                        <div className='mt-5 text-center'>
                            <span className='text-lg text-zinc-500 font-bold capitalize'>
                                { repository.name.replaceAll('-', ' ') }
                            </span>
                        </div>
                    </div>
                </article>
                <div className='repo-details bg-zinc-500 rounded'>
                    <div className='flex flex-col justify-evenly p-3'>
                        <div className='flex flex-col gap-1 rounded bg-zinc-100 p-2'>
                            <span className='font-bold'>Description:</span>
                            <span>{ repository.description }</span>
                        </div>
                        <div>
                            <RepoLanguages languagesUrl={repository.languages_url} />
                        </div>
                    </div>
                </div>
            </a>
    )
}

export default RepositoryCard