import { IRepositoryLanguage } from "src/models/RepositoriesResponse"

interface Props {
    languages: Array<IRepositoryLanguage>
}

const RepoLanguages: React.FC = ({ languages } : Props) => {
    return (
        <ul className='flex flex-wrap gap-2 mt-3'>
            {
                languages.map(({ id, name, color }) => {                    
                    return (
                        <li key={id} className='bg-zinc-100 rounded-full p-2 text-white' style={{ backgroundColor: color}}>
                            {name}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default RepoLanguages