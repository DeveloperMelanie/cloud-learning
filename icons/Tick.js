const Tick = props => (
    <svg
        width={24}
        height={24}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        stroke='#16a34a'
        strokeWidth={1.5}
        aria-hidden='true'
        viewBox='0 0 24 24'
        {...props}
    >
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m4.5 12.75 6 6 9-13.5'
        />
    </svg>
)
export default Tick
