import Skeleton from 'react-loading-skeleton'
import LoggedInMenu from './LoggedInMenu'
import Button from 'components/Button'

export default function UserMenu({ auth }) {
    if (auth.status === 'loading') {
        return (
            <div className='flex gap-4 items-center'>
                <Skeleton width={20} />
                <Skeleton circle width='50px' height='50px' />
            </div>
        )
    }

    if (auth.loggedIn) {
        return <LoggedInMenu user={auth.user} />
    }

    return (
        <Button href='/login' className='py-2 sm:py-3 px-5 sm:px-7'>
            Ingresar
        </Button>
    )
}
