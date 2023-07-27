import FullStar from 'icons/stars/FullStar'
import HalfStar from 'icons/stars/HalfStar'
import EmptyStar from 'icons/stars/EmptyStar'

export default function RatingStars({ rating }) {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 === 0.5 ? 1 : 0
    const emptyStars = 5 - fullStars - halfStar

    const renderStars = (StarComponent, count) =>
        Array(count)
            .fill(null)
            .map((_, i) => <StarComponent key={`${StarComponent.name}-${i}`} />)

    return (
        <div className='flex'>
            {renderStars(FullStar, fullStars)}
            {renderStars(HalfStar, halfStar)}
            {renderStars(EmptyStar, emptyStars)}
        </div>
    )
}
