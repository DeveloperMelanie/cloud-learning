import { useCallback } from 'react'
import { useRouter } from 'next/router'
import FormField from 'components/FormField'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { changePassword } from 'redux/features/auth/authSlice'
import { addAlert } from 'redux/features/alerts/alertSlice'

const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .min(
            6,
            'La contraseña es muy corta - debe tener al menos 6 caracteres.',
        )
        .required('Requerido'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
        .required('Requerido'),
})

export default function RecoverForm({ token }) {
    const dispatch = useDispatch()
    const router = useRouter()

    const handleSubmit = useCallback(
        async (values, { setSubmitting }) => {
            const { password } = values

            const action = await dispatch(changePassword({ token, password }))
            if (changePassword.rejected.match(action)) {
                dispatch(addAlert({ message: action.payload, type: 'error' }))
            } else {
                dispatch(
                    addAlert({
                        message: 'Se ha actualizado tu contraseña',
                        type: 'success',
                    }),
                )
                router.push('/')
            }
            setSubmitting(false)
        },
        [dispatch],
    )

    return (
        <Formik
            initialValues={{ password: '', confirmPassword: '' }}
            validationSchema={ResetPasswordSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className='flex flex-col pt-3 md:pt-8'>
                    <FormField
                        name='password'
                        type='password'
                        placeholder='Nueva contraseña'
                        label='Nueva Contraseña'
                    />
                    <FormField
                        name='confirmPassword'
                        type='password'
                        placeholder='Confirmar nueva contraseña'
                        label='Confirmar Nueva Contraseña'
                    />
                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className='bg-primary-gradient text-white rounded font-bold text-lg p-2 mt-8 cursor-pointer'
                    >
                        Cambiar Contraseña
                    </button>
                </Form>
            )}
        </Formik>
    )
}
