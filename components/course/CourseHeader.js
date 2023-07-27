import Link from 'next/link'
import FullStar from 'icons/stars/FullStar'
import { formatNumber, transformToCommaDecimal } from 'utilities'

export default function CourseHeader({ course }) {
    const { title, averageRating, ratingCount, price } = course

    return (
        <div className='fixed z-10 bottom-0 lg:bottom-[unset] lg:top-0 left-0 w-full px-4 py-2 bg-primary text-white shadow-md flex gap-6 justify-end sm:justify-between items-center'>
            <div className='hidden sm:block'>
                <span className='text-xl font-bold'>{title}</span>
                <div className='flex flex-wrap gap-1 items-center font-body'>
                    <span className='font-bold'>
                        {transformToCommaDecimal(averageRating)}
                    </span>
                    <FullStar fill='#ffd026' />
                    <span>({formatNumber(ratingCount)} calificaciones)</span>
                    <span>142.000 estudiantes</span>
                </div>
            </div>
            <div className='flex gap-4 items-center lg:hidden'>
                <span className='text-xl font-bold'>{price} US$</span>
                <Link
                    href='/'
                    className='px-3 py-2 bg-white text-black rounded-md font-bold shadow-subtle'
                >
                    Comprar ahora
                </Link>
            </div>
        </div>
    )
}
