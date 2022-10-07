import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const TextButton = (props) => { 
    
    return (
        <Button {...props} >
            { props.label }
        </Button>
    )
}

TextButton.propTypes = {
    variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string,
    disabled: PropTypes.bool,
    sx: PropTypes.object,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['success', 'error', 'secondary', 'primary']),
    startIcon: PropTypes.elementType,
    id: PropTypes.string
}

export default TextButton;