import Link from 'next/link'
import StarRating from './StarRating'
import { formatNumber } from 'utilities'

export default function Course({ course }) {
    const { id, thumbnail, title, author, averageRating, ratingCount, price } =
        course

    return (
        <Link
            href={`/course/${id}`}
            className='bg-white rounded-lg shadow-md w-full md:max-w-[408px] hover:scale-105 transition-transform'
        >
            <div className='w-full h-[296px] overflow-hidden rounded-t-lg'>
                <img
                    src={thumbnail}
                    alt={title}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='py-5 px-7 space-y-2'>
                <div>
                    <h3 className='text-xl font-semibold mb-1'>{title}</h3>
                    <p className='text-base font-semibold font-body text-gray-500'>
                        {author?.name}
                    </p>
                </div>
                <div className='space-y-4'>
                    <div className='flex gap-1 items-center font-semibold'>
                        <StarRating rating={averageRating} />
                        <span className='text-gray-500'>
                            ({formatNumber(ratingCount)})
                        </span>
                    </div>
                    <span className='block text-xl font-bold text-primary'>
                        {price} US$
                    </span>
                </div>
            </div>
        </Link>
    )
}
