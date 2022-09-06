const NavMblOpenBtn: React.FC = () => {
	const openNav = () => {
		const navClassNames = document.querySelector('nav').classList
		
		navClassNames.value.split(' ').filter(className => {
			if (className === 'hidden') {
				navClassNames.remove('hidden')
				navClassNames.add('flex')
				document.querySelector('body').classList.add('overflow-hidden')
			}
		})
	}

	return (
		<figure onClick={openNav} className='sm:hidden absolute top-5 left-5 w-[50px] bg-zinc-700 rounded p-3'>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill="white">
				<path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'></path>
			</svg>
		</figure>
	)
}

export default NavMblOpenBtn
