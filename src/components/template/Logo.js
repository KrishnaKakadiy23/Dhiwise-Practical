import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


const Logo = (props) => {
    const { gutter, className, style, logoWidth } = props

    return (
        <div
            className={classNames('logo', className, gutter)}
            style={{
                ...style,
                ...{ width: logoWidth },
            }}
        >
            <p className='text-2xl mt-5'>Logo</p>
        </div>
    )
}

Logo.defaultProps = {
    mode: 'light',
    type: 'full',
    logoWidth: 'auto',
}

Logo.propTypes = {
    mode: PropTypes.oneOf(['light', 'dark']),
    type: PropTypes.oneOf(['full', 'streamline']),
    gutter: PropTypes.string,
    imgClass: PropTypes.string,
    logoWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Logo
