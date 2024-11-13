'use client'

import { memo, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './styles.module.scss'
import { ModalProps } from './types'
import { useClickOutside } from 'src/hooks'

const Modal = ({ onCloseModal, children }: ModalProps) => {
    const modalRef = useRef(null)
    useClickOutside(modalRef, () => onCloseModal())

    return createPortal(
        <div className={styles.container}>
            <div className={styles.window} ref={modalRef}>
                <button onClick={onCloseModal} className={styles.closeButton}>
                    <p className={styles.img}>close</p>
                </button>
                {children}
            </div>
        </div>,
        document.body
    )
}

export default memo(Modal)
