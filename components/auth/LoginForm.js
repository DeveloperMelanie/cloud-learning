import { useCallback } from 'react'
import FormField from 'components/FormField'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { loginUser } from 'redux/features/auth/authSlice'
import { addAlert } from 'redux/features/alerts/alertSlice'

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Requerido'),
    password: Yup.string()
        .min(
            6,
            'La contraseña es muy corta - debe tener al menos 6 caracteres.',
        )
        .required('Requerido'),
})

export default function LoginForm() {
    const dispatch = useDispatch()

    const handleSubmit = useCallback(
        async (values, { setSubmitting }) => {
            const action = await dispatch(loginUser(values))
            if (loginUser.rejected.match(action)) {
                dispatch(addAlert({ message: action.payload, type: 'error' }))
            }
            setSubmitting(false)
        },
        [dispatch],
    )

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
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
                    <FormField
                        name='password'
                        type='password'
                        placeholder='Contraseña'
                        label='Contraseña'
                    />
                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className='bg-primary-gradient text-white rounded font-bold text-lg p-2 mt-8 cursor-pointer'
                    >
                        Ingresar
                    </button>
                </Form>
            )}
        </Formik>
    )
}
