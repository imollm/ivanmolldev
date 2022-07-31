import { LaravelIcon } from "@icons/laravel"
import { SymfonyIcon } from "@icons/symfony"
import { ExpressIcon } from "@icons/express"

const BackendFrameLibIcons: React.FC = () => {
    return (
        <>
            <div className="profile-icons-title">Backend Frameworks/lib</div>
            <ul className='profile-icons-container'>
                <li className='profile-icons-wrapper'><LaravelIcon /></li>
                <li className='profile-icons-wrapper'><SymfonyIcon /></li>
                <li className='profile-icons-wrapper'><ExpressIcon /></li>
            </ul>
        </>
    )
}

export default BackendFrameLibIcons