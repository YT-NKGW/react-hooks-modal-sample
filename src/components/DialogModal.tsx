import { useState } from 'react'
import ModalContent from './ModalContent'
import ModalTrigger from './ModalTrigger'
import ModalContentType from '../types/ModalContentType'

type DialogModalContentType = {
  contentType: typeof ModalContentType[keyof typeof ModalContentType]
  contentText: string
}

const DialogModal = ({ contentType, contentText }: DialogModalContentType) => {
  const [isOpenModal, setModalState] = useState(false)
  const toggleModal = () => setModalState((current) => !current)

  return (
    <>
      <ModalContent isOpen={isOpenModal} contentType={contentType} contentText={contentText} toggleModal={toggleModal} />
      <ModalTrigger toggleModal={toggleModal} />
    </>
  )
}

export default DialogModal
