import { Field } from 'formik'
import ErrorAlert from 'components/ErrorAlert'

export default function FormField({ name, type, placeholder, label }) {
    return (
        <div className='flex flex-col pt-4'>
            <label htmlFor={name} className='text-lg'>
                {label}
            </label>
            <Field
                type={type}
                name={name}
                placeholder={placeholder}
                className='shadow-sm appearance-none border rounded w-full py-[0.6rem] px-4 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
            />
            <ErrorAlert name={name} />
        </div>
    )
}
