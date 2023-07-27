import { useState, useRef, useEffect } from 'react'

export default function useAccordion(open = false) {
    const [isOpen, setIsOpen] = useState(false)
    const [maxHeight, setMaxHeight] = useState('0')
    const contentRef = useRef(null)

    useEffect(() => {
        const contentHeight = contentRef.current?.scrollHeight
        setMaxHeight(isOpen ? `${contentHeight}px` : '0')
    }, [isOpen])

    useEffect(() => {
        setIsOpen(open)
    }, [open])

    const handleToggle = () => setIsOpen(!isOpen)

    return { isOpen, handleToggle, maxHeight, contentRef }
}
