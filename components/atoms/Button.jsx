const Button = ({ href, blank, noreferrer, className, children }) => {
  return (
    <a
      href={href}
      target={`${blank ? '_blank' : ''}`}
      className={`inline-block px-6 py-2.5 mt-5
                  bg-yellow-300 text-yellow-900 font-medium text-xs leading-tight uppercase rounded shadow-md 
                  hover:bg-yellow-900 hover:shadow-lg hover:text-white
                  focus:bg-yellow-900 focus:shadow-lg focus:outline-none focus:ring-0 
                  active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out 
                  ${className}`}
      rel={`${noreferrer ? 'noreferrer' : ''}`}
    >
      {children}
    </a>
  )
}

export default Button
