import { useCallback } from 'react'
import { useRouter } from 'next/router'
import FormField from 'components/FormField'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { forgotPassword } from 'redux/features/auth/authSlice'
import { addAlert } from 'redux/features/alerts/alertSlice'

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Requerido'),
})

export default function ForgotPasswordForm() {
    const dispatch = useDispatch()
    const router = useRouter()

    const handleSubmit = useCallback(
        async (values, { setSubmitting }) => {
            const action = await dispatch(forgotPassword(values))
            if (forgotPassword.rejected.match(action)) {
                dispatch(addAlert({ message: action.payload, type: 'error' }))
            } else {
                router.push({
                    pathname: '/success',
                    query: { forPassword: 'true' },
                })
            }
            setSubmitting(false)
        },
        [dispatch],
    )

    return (
        <Formik
            initialValues={{ email: '' }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className='flex flex-col pt-3 md:pt-8'>
                    <FormField
                        name='email'
                        type='email'
                        placeholder='your@email.com'
                        label='Email'
                    />
                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className='bg-primary-gradient text-white rounded font-bold text-lg p-2 mt-8 cursor-pointer'
                    >
                        Recuperar Contraseña
                    </button>
                </Form>
            )}
        </Formik>
    )
}
