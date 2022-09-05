import { useEffect, useState } from "react"

interface Props {
    languagesUrl: string
}

const RepoLanguages: React.FC = ({ languagesUrl }: Props) => {
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        getLanguages()
    }, [])

    const getLanguages = async () => {
        try {
            const response = await fetch(languagesUrl, {
                method: 'GET',
                headers: {
                    accept: 'application/vnd.github+json',
                }
            })

            setLanguages(await response.json())
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ul className='flex flex-wrap gap-2 mt-3'>
            {
                languages &&
                Object.keys(languages).map((language: string) => {
                    const textColor = language.toLowerCase() === 'makefile' ? 'text-black' : 'text-white'
                    const bgColor = `bg-${language.toLowerCase()}`
                    
                    return (
                        <li key={language} className={`bg-zinc-100 rounded-full p-2 ${textColor} ${bgColor}`}>
                            {language}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default RepoLanguages