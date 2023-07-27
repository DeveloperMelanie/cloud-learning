import { useRef, useState, useEffect } from 'react'

export default function useVisibilityOnScroll() {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const checkVisibility = () => {
        if (window.innerWidth < 1024) {
            setIsVisible(false)
            return
        }

        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        if (rect.top <= 100) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        checkVisibility()
        window.addEventListener('scroll', checkVisibility)

        return () => window.removeEventListener('scroll', checkVisibility)
    }, [])

    return [ref, isVisible]
}
