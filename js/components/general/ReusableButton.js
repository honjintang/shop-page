import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

const ReusableButton = ({ id, label, onClick, active }) =>
    <Button id={id} variant="outline-light" onClick={onClick} active={active}>{label}</Button>

ReusableButton.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
}

export default ReusableButton