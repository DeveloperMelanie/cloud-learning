import Link from 'next/link'

export default function Button({
    filled = true,
    href,
    children,
    className,
    onClick,
}) {
    const baseButtonClass =
        'block rounded-md font-semibold text-lg whitespace-nowrap'

    const getButtonClass = () => {
        let buttonClass = baseButtonClass
        if (filled) {
            buttonClass += ' bg-primary-gradient text-white'
        } else {
            buttonClass += ' border hover:bg-gray-50 transition-all shadow-mini'
        }
        if (className) {
            buttonClass += ` ${className}`
        }
        return buttonClass
    }

    if (href) {
        return (
            <Link href={href} className={getButtonClass()}>
                {children}
            </Link>
        )
    }

    return (
        <button type='button' onClick={onClick} className={getButtonClass()}>
            {children}
        </button>
    )
}
