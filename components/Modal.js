import ReactModal from 'react-modal'

ReactModal.setAppElement('#__next')

export default function Modal({ isOpen, onRequestClose, children }) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className='rounded-2xl overflow-hidden outline-none w-full max-w-3xl'
            overlayClassName='p-4 fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex items-center justify-center'
            closeTimeoutMS={300}
        >
            {children}
        </ReactModal>
    )
}
