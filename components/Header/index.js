import { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

import SearchBar from './SearchBar'
import UserMenu from './UserMenu'

export default function Header() {
    const [searchOpen, setSearchOpen] = useState(false)

    const auth = useSelector(state => state.auth)

    return (
        <header className='relative z-50 py-6 bg-white'>
            <div className='container flex items-center justify-between h-full mx-auto'>
                {searchOpen ? (
                    <div className='w-full flex items-center'>
                        <button
                            type='button'
                            onClick={() => setSearchOpen(!searchOpen)}
                        >
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                className='w-[20px]'
                            />
                        </button>
                        <SearchBar isVisible={searchOpen} />
                    </div>
                ) : (
                    <>
                        <Link href='/' className='mr-3'>
                            <img
                                src='/inline-logo.png'
                                alt='Cloud Learning'
                                className='w-full md:w-[unset] max-w-[220px]'
                            />
                        </Link>
                        <SearchBar />
                        <button
                            type='button'
                            className='p-1 ml-auto mr-3 rounded-md md:hidden focus:outline-none'
                            aria-label='Buscar'
                            onClick={() => setSearchOpen(!searchOpen)}
                        >
                            <FontAwesomeIcon
                                icon={faSearch}
                                className='w-[21px]'
                            />
                        </button>

                        <UserMenu auth={auth} />
                    </>
                )}
            </div>
        </header>
    )
}
