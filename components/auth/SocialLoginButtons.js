import { openNewWindow } from 'utilities'

import Google from 'icons/Google'
import GitHub from 'icons/GitHub'

export default function SocialLoginButtons() {
    return (
        <div className='flex justify-center gap-3 mt-12'>
            <button
                type='button'
                className='flex items-center justify-center bg-white hover:bg-gray-100 transition-all shadow-lg border border-gray-200 rounded-full w-[55px] h-[55px]'
                onClick={() => {
                    openNewWindow(`${process.env.NEXT_PUBLIC_API}/auth/google`)
                }}
            >
                <Google />
            </button>
            <button
                type='button'
                className='flex items-center justify-center bg-white hover:bg-gray-100 transition-all shadow-lg border border-gray-200 rounded-full w-[55px] h-[55px]'
                onClick={() => {
                    openNewWindow(`${process.env.NEXT_PUBLIC_API}/auth/github`)
                }}
            >
                <GitHub />
            </button>
        </div>
    )
}
