import Link from 'next/link'
import RatingStars from 'components/StarRating'
import Button from 'components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory, faGlobe } from '@fortawesome/free-solid-svg-icons'
import {
    formatDate,
    formatNumber,
    getLanguage,
    transformToCommaDecimal,
} from 'utilities'

export default function CourseHeading({ course }) {
    const {
        title,
        thumbnail,
        subtitle,
        averageRating,
        ratingCount,
        author,
        updatedAt,
        language,
        price,
    } = course

    return (
        <>
            <img
                src={thumbnail}
                alt={thumbnail}
                className='w-full rounded-2xl lg:hidden'
            />
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='font-semibold text-gray-500 font-body'>{subtitle}</p>
            <div className='flex flex-wrap gap-1 items-center font-body'>
                <span className='text-primary font-bold'>
                    {transformToCommaDecimal(averageRating)}
                </span>
                <RatingStars rating={averageRating} />
                <span>({formatNumber(ratingCount)} calificaciones)</span>
                <span>142.000 estudiantes</span>
            </div>
            <p className='font-body'>
                Creado por{' '}
                <Link href='/' className='underline'>
                    {author.name}
                </Link>
            </p>
            <div className='flex gap-4 items-center font-body'>
                <div className='flex items-center gap-2'>
                    <FontAwesomeIcon
                        icon={faHistory}
                        className='w-[15px] h-[15px]'
                    />
                    <span>Última actualización: {formatDate(updatedAt)}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <FontAwesomeIcon
                        icon={faGlobe}
                        className='w-[15px] h-[15px]'
                    />
                    <span>{getLanguage(language)}</span>
                </div>
            </div>
            <div className='space-y-4 pt-6 block lg:hidden'>
                <span className='text-3xl font-bold'>{price} US$</span>
                <div className='space-y-2'>
                    <Button className='w-full py-2'>Añadir al carrito</Button>
                </div>
            </div>
        </>
    )
}
