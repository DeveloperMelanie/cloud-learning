import { useCallback } from 'react'
import { useRouter } from 'next/router'

import FormField from 'components/FormField'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { registerUser } from 'redux/features/auth/authSlice'
import { addAlert } from 'redux/features/alerts/alertSlice'

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Requerido'),
    email: Yup.string().email('Email inválido').required('Requerido'),
    password: Yup.string()
        .min(
            6,
            'La contraseña es muy corta - debe tener al menos 6 caracteres.',
        )
        .required('Requerido'),
})

export default function RegisterForm() {
    const dispatch = useDispatch()
    const router = useRouter()

    const handleSubmit = useCallback(
        async (values, { setSubmitting }) => {
            const action = await dispatch(registerUser(values))
            if (registerUser.rejected.match(action)) {
                dispatch(addAlert({ message: action.payload, type: 'error' }))
            } else {
                router.push('/success')
            }
            setSubmitting(false)
        },
        [dispatch, router],
    )

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={RegisterSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className='flex flex-col pt-3 md:pt-8'>
                    <FormField
                        name='name'
                        type='text'
                        placeholder='Tu nombre'
                        label='Nombre'
                    />
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
                        Registrarse
                    </button>
                </Form>
            )}
        </Formik>
    )
}
