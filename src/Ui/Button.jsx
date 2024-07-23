import { Link } from "react-router-dom";

const Button = ({ children, disabled, type, to, onClick }) => {
  const base = 'inline-block text-sm rounded-full font-semibold uppercase tracking-wide text-stone-800 bg-yellow-400 hover:bg-yellow-300 transition-colors duration-300 focus:bg-yellow-300 focus:ring focus:ring=yelllow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed'

  const styles = { 
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:py-2.5 md:px-5 text-xs',
    round: base + ' px-2.5 py-1 md:py-2 md:px-3.5 text-sm',
    secondary: 'inline-block text-sm rounded-full font-semibold uppercase tracking-wide text-stone-400 px-4 py-2.5 md:px-6 md:py-3.5 border-2 border-stone-300 hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:bg-stone-300 focus:text-stone-800 focus:ring focus:ring=stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed'
  }

  if (to) 
    return (
      <Link className={styles[type]} to={to}>{children}</Link>
    )

  return ( 
        <button
          onClick={onClick}
          disabled={disabled}
          className={styles[type]}>
              {children}
        </button>
     );
}
 
export default Button;