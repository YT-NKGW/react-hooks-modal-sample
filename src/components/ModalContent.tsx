import { createRef, useEffect } from 'react'
import styles from './Modal.module.css'
import ModalContentType from '../types/ModalContentType'

type ModalContentType = {
  isOpen: boolean
  contentType: typeof ModalContentType[keyof typeof ModalContentType]
  contentText: string
  toggleModal: () => void
}

const ModalContent = ({ isOpen, contentType, contentText, toggleModal }: ModalContentType) => {
  const modalRef = createRef<HTMLDialogElement>()

  useEffect(() => {
    if (!modalRef.current) return

    modalRef.current[isOpen ? 'showModal' : 'close']()    
  }, [isOpen])

  return (
    <>
      <dialog className={`${styles.dialog} ${styles[contentType]}`} ref={modalRef}>
        <p>{contentText}</p>
        <button onClick={toggleModal}>Close</button>
      </dialog>
    </>
  )
}

export default ModalContent
