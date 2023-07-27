export default function Heading({ title, children }) {
    return (
        <div className='text-center space-y-5 mb-20'>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='font-body max-w-[510px] mx-auto font-semibold text-gray-500'>
                {children}
            </p>
        </div>
    )
}
