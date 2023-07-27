import { useState, useRef, useLayoutEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function ReducedText({ children }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isTruncated, setIsTruncated] = useState(false)
    const contentRef = useRef(null)

    useLayoutEffect(() => {
        if (contentRef.current) {
            const style = window.getComputedStyle(contentRef.current)
            const lineHeight = parseFloat(style.lineHeight)
            const lines = contentRef.current.offsetHeight / lineHeight
            setIsTruncated(lines > 7)
        }
    }, [children])

    return (
        <div className='space-y-4'>
            <div className='relative'>
                <div
                    ref={contentRef}
                    className={`overflow-hidden space-y-3 ${
                        isExpanded ? '' : 'line-clamp'
                    }`}
                >
                    {children}
                </div>
                {!isExpanded && isTruncated && <div className='fade' />}
            </div>
            {isTruncated && (
                <button
                    type='button'
                    onClick={() => setIsExpanded(!isExpanded)}
                    className='flex gap-2 items-center font-bold text-primary hover:text-opacity-90 transition-colors'
                >
                    <span>Ver {isExpanded ? 'menos' : 'más'}</span>
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`w-[15px] h-[15px] transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                        }`}
                    />
                </button>
            )}
        </div>
    )
}
