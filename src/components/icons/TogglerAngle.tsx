interface Props {
    elementToCloseSelector: string
}

const TogglerAngle: React.FC = ({ elementToCloseSelector }: Props) => {
    const toggler = () => {
        const elementToClose = document.querySelector(elementToCloseSelector)
        const arrowElement = document.querySelector(`${elementToCloseSelector} .angle-down-icon-wrapper`)

        if (elementToClose.classList.value.indexOf('closed') > -1) {
            elementToClose.classList.remove('closed')
            arrowElement.classList.remove('closed')
        } else {
            elementToClose.classList.add('closed')
            arrowElement.classList.add('closed')
        }
    }

    return (
        <picture className='angle-down-icon-wrapper' onClick={toggler}>
            <svg className='angle-down-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                    d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
            </svg>
        </picture>
    )
}

export default TogglerAngle