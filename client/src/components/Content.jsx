import css from './Content.module.css'

const Content = ({children, className = ''}) => {
  return (
    <div className={`${css.container} ${className}`}>{ children }</div>
  )
}

export default Content