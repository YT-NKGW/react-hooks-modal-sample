type ModalTriggerType = {
  toggleModal: () => void
}

const ModalTrigger = ({ toggleModal }: ModalTriggerType) => {
  return (
    <>
      <div className='actions'>
        <button data-modal='true' onClick={toggleModal}>Open dialog modal</button>
      </div>
    </>
  )
}

export default ModalTrigger
