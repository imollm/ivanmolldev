import { ReactIcon } from "@icons/react"
import { AngularIcon } from "@icons/angular"
import { BootstrapIcon } from "@icons/bootstrap"
import { TailwindIcon } from "@icons/tailwind"
import { SassIcon } from "@icons/sass"

const FrontendFrameLibIcons: React.FC = () => {
    return (
        <>
            <div className="profile-icons-title">Frontend Frameworks/lib</div>
            <ul className='profile-icons-container'>
                <li className='profile-icons-wrapper'><ReactIcon /></li>
                <li className='profile-icons-wrapper'><AngularIcon /></li>
                <li className='profile-icons-wrapper'><BootstrapIcon /></li>
                <li className='profile-icons-wrapper'><TailwindIcon /></li>
                <li className='profile-icons-wrapper'><SassIcon /></li>
            </ul>
        </>
    )
}

export default FrontendFrameLibIcons