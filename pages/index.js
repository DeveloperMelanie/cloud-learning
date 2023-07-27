import SEO from 'components/SEO'
import axiosClient from 'config/axios'

import Hero from 'components/home/Hero'
import Courses from 'components/home/Courses'
import HowItWorks from 'components/home/HowItWorks'
import Categories from 'components/home/Categories'
import Features from 'components/home/Features'

export default function Home({ courses }) {
    return (
        <>
            <SEO />
            <div className='space-y-24'>
                <Hero />
                <Courses courses={courses} />
                <HowItWorks />
                <Categories />
                <Features />
            </div>
        </>
    )
}

export const getServerSideProps = async () => {
    const { data } = await axiosClient.get(
        '/api/courses?limit=6&select=author,ratingCount,averageRating,price,thumbnail,title',
    )
    return { props: { courses: data } }
}
