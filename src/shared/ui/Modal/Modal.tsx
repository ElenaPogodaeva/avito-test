/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions  */
import React from 'react';
import './Modal.scss';

type ModalProps = {
  children: React.ReactNode;
};

export function Modal({ children }: ModalProps) {
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}
