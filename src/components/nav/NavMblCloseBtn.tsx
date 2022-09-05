const NavMblCloseBtn: React.FC = () => {
    const closeNav = () => {
		const navClassNames = document.querySelector('nav').classList
		const isHidden = navClassNames.value.split(' ').includes('hidden')

        if (!isHidden) {
            navClassNames.add('hidden')
            navClassNames.remove('flex')
            document.querySelector('body').classList.remove('overflow-hidden')
        }
	}
    
    return (
        <figure onClick={closeNav} className='flex sm:hidden absolute top-5 right-5 w-5 h-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white">
                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
            </svg>
        </figure>
    )
}

export default NavMblCloseBtn