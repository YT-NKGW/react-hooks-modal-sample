import { createRef, useState, useEffect } from "react"
import styles from "./Modal.module.css"

const DialogModal = () => {
  const modalRef = createRef<HTMLDialogElement>()
  const [isOpenModal, setModalState] = useState(false)
  const toggleModal = () => setModalState((current) => !current)

  useEffect(() => {
    if (!modalRef.current) return

    modalRef.current[isOpenModal ? 'showModal' : 'close']()    
  }, [isOpenModal])

  return (
    <>
      <dialog className={styles.dialog} ref={modalRef}>
        <p>This is dialog modal</p>
        <button onClick={toggleModal}>Close</button>
      </dialog>
      <div className="actions">
        <button data-modal="true" onClick={toggleModal}>Open dialog modal</button>
      </div>
    </>
  )
}

export default DialogModal
