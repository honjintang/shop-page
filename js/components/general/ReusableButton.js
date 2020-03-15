import React from 'react'
import Button from 'react-bootstrap/Button'

const ReusableButton = ({ id, label, onClick, active }) =>
    <Button id={id} variant="outline-light" onClick={onClick} active={active}>{label}</Button>

export default ReusableButton