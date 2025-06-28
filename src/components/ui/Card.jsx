import PropTypes from 'prop-types'

const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`rounded-lg shadow-md p-6 bg-white dark:bg-gray-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Card