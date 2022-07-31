import { HtmlIcon } from "@icons/html"
import { CssIcon } from "@icons/css"
import { JavaScriptIcon } from "@icons/javascript"

const FrontendIcons: React.FC = () => {
    return (
        <>
            <div className="profile-icons-title">Frontend</div>
            <ul className='profile-icons-container'>
                <li className='profile-icons-wrapper'><HtmlIcon /></li>
                <li className='profile-icons-wrapper'><CssIcon /></li>
                <li className='profile-icons-wrapper'><JavaScriptIcon /></li>
            </ul>
        </>
    )
}

export default FrontendIcons