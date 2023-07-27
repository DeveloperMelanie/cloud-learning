import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import useOutsideClickAndEsc from 'hooks/useOutsideClickAndEsc'
import { useDispatch } from 'react-redux'
import { logoutUser } from 'redux/features/auth/authSlice'

export default function LoggedInMenu({ user }) {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()

    const dropdownRef = useRef(null)
    const dontCloseRef = useRef(null)
    useOutsideClickAndEsc(dropdownRef, dontCloseRef, setDropdownOpen)

    const handleLogout = () => {
        dispatch(logoutUser())
        setDropdownOpen(false)
    }

    useEffect(() => {
        setDropdownOpen(false)
    }, [router.asPath])

    return (
        <div className='flex gap-4 items-center'>
            <FavoriteCoursesButton />
            <div className='relative'>
                <ProfileButton
                    user={user}
                    dontCloseRef={dontCloseRef}
                    setDropdownOpen={setDropdownOpen}
                />
                {dropdownOpen && (
                    <DropdownMenu
                        dropdownRef={dropdownRef}
                        handleLogout={handleLogout}
                    />
                )}
            </div>
        </div>
    )
}

const FavoriteCoursesButton = () => (
    <button
        type='button'
        className='relative rounded-md'
        aria-label='Cursos favoritos'
        aria-haspopup='true'
    >
        <FontAwesomeIcon icon={faHeart} className='w-[25px] h-[25px]' />
    </button>
)

const ProfileButton = ({ user, dontCloseRef, setDropdownOpen }) => (
    <button
        type='button'
        ref={dontCloseRef}
        className='rounded-full focus:outline-none'
        aria-label='Mi cuenta'
        aria-haspopup='true'
        onClick={() => setDropdownOpen(prevState => !prevState)}
    >
        <img
            className='object-cover max-w-none w-[50px] h-[50px] rounded-full'
            src={user.avatar}
            alt={user.name}
            aria-hidden='true'
        />
    </button>
)

const DropdownMenu = ({ dropdownRef, handleLogout }) => (
    <div
        ref={dropdownRef}
        className='absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-sm font-body overflow-hidden z-50'
    >
        <Link
            href='/my-account'
            className='block px-4 py-2 text-gray-800 hover:bg-gray-100'
        >
            Ver perfil
        </Link>
        <button
            type='button'
            className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100'
            onClick={handleLogout}
        >
            Cerrar sesión
        </button>
    </div>
)
