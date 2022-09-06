const GoTopBtn: React.FC = () => {
    const goToTop = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div onClick={goToTop} className='bg-zinc-700 rounded-full fixed bottom-5 right-5 w-16 h-16'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-80 -30 598 662" fill="white">
                <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
            </svg>
        </div>
    )
}

export default GoTopBtn