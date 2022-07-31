import { PhpIcon } from "@icons/php"
import { NodeJSIcon } from "@icons/nodejs"

const BackendIcons: React.FC = () => {
    return (
        <>
            <div className="profile-icons-title">Backend</div>
            <ul className='profile-icons-container'>
                <li className='profile-icons-wrapper'><PhpIcon /></li>
                <li className='profile-icons-wrapper'><NodeJSIcon /></li>
            </ul>
        </>
    )
}

export default BackendIcons