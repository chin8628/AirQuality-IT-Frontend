import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const StyledModal = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 1em;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`

const ModalContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  max-width: 420px;
  padding: 1em 1.5em;
  background-color: #fff;
  box-shadow: 0px 7px 28px rgba(0, 0, 0, 0.2);
`

const CloseBtn = styled.button`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  text-align: center;
  background: none;
  border: 0;
`

const Modal = ({ children, handleClose }) => (
  <StyledModal>
    <ModalContainer>
      <CloseBtn onClick={handleClose}>
        <FontAwesome name="times" size="1x" />
      </CloseBtn>
      {children}
    </ModalContainer>
  </StyledModal>
)

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default Modal
