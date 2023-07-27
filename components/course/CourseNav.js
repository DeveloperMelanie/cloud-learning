import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function CourseNav() {
    return (
        <nav className='flex gap-3 items-center'>
            <Link href='/'>
                <FontAwesomeIcon icon={faHome} className='w-[20px] h-[20px]' />
            </Link>
            <FontAwesomeIcon
                icon={faAngleRight}
                className='w-[15px] h-[15px]'
            />
            <Link href={`/category/`} className='font-bold'>
                Programación
            </Link>
        </nav>
    )
}
