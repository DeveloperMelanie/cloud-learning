import { useEffect } from 'react'

export default function useOutsideClickAndEsc(ref, dontCloseRef, setOpen) {
    useEffect(() => {
        const handleClickOutside = event => {
            if (!ref.current || !dontCloseRef.current) return

            if (
                !ref.current.contains(event.target) &&
                !dontCloseRef.current.contains(event.target)
            ) {
                setOpen(false)
            }
        }

        const handleEscKey = event => {
            if (event.key === 'Escape') {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleEscKey)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscKey)
        }
    }, [ref, dontCloseRef, setOpen])
}
