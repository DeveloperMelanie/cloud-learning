import axiosClient from 'config/axios'
import { getTotalContentTime } from 'utilities'
import useVisibilityOnScroll from 'hooks/useVisibilityOnScroll'
import SEO from 'components/SEO'
import CourseHeader from 'components/course/CourseHeader'
import CourseNav from 'components/course/CourseNav'
import CourseHeading from 'components/course/CourseHeading'
import CourseLearning from 'components/course/CourseLearning'
import CourseSections from 'components/course/CourseSections'
import CourseFeatures from 'components/course/CourseFeatures'
import CourseInfo from 'components/course/CourseInfo'

export default function CoursePage({ course }) {
    const [bodyFeatureRef, isBodyFeatureVisible] = useVisibilityOnScroll()
    const totalDuration = getTotalContentTime(course.sections)

    return (
        <>
            <SEO title={course.title} />
            <CourseHeader course={course} />
            <section className='bg-primary bg-opacity-20 py-14'>
                <div className='relative container'>
                    <div className='w-full lg:w-1/2 space-y-4'>
                        <CourseNav />
                        <CourseHeading course={course} />
                    </div>
                    <div
                        className={`transition-all hidden lg:block ${
                            isBodyFeatureVisible
                                ? 'invisible opacity-0'
                                : 'visible opacity-100'
                        }`}
                    >
                        <CourseFeatures
                            course={course}
                            totalDuration={totalDuration}
                        />
                    </div>
                </div>
            </section>
            <section className='container flex gap-12 xl:justify-between py-14'>
                <div className='w-full flex-1 lg:flex-none lg:w-1/2 space-y-8 '>
                    <CourseLearning course={course} />
                    <CourseSections
                        course={course}
                        totalDuration={totalDuration}
                    />
                    <CourseInfo course={course} />
                </div>
                <div
                    ref={bodyFeatureRef}
                    className={`transition-all hidden lg:block
                        ${
                            isBodyFeatureVisible
                                ? 'visible opacity-100'
                                : 'invisible opacity-0'
                        }
                    `}
                >
                    <CourseFeatures
                        sticky
                        course={course}
                        totalDuration={totalDuration}
                    />
                </div>
            </section>
        </>
    )
}

export const getServerSideProps = async context => {
    const { id } = context.params

    const { data } = await axiosClient.get(`/api/courses/${id}`)
    return { props: { course: data } }
}
