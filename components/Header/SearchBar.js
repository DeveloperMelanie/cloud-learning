import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar({ isVisible }) {
    return (
        <div
            className={`relative text-gray-600 w-full md:max-w-[500px] ${
                isVisible ? 'ml-4' : 'hidden'
            } md:mx-5 md:block`}
        >
            <input
                className='bg-gray-100 w-full pl-8 pr-10 py-3 rounded-full text-base focus:outline-none font-body'
                type='search'
                name='search'
                placeholder='Buscar cursos'
            />
            <button
                className='absolute right-0 top-1/2 -translate-y-1/2 mr-4 focus:outline-none'
                type='submit'
            >
                <FontAwesomeIcon
                    icon={faSearch}
                    color='#b5bcc5'
                    className='w-[20px]'
                />
            </button>
        </div>
    )
}
