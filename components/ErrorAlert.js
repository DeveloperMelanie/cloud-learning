import { ErrorMessage } from 'formik'

export default function ErrorAlert({ name }) {
    return <ErrorMessage name={name} component='div' className='text-red-600' />
}
