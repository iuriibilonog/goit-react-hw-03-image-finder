import s from './Button.module.css';

const Button = ({ onLoadMore}) => {

  
  return (
    <button onClick={ onLoadMore} className={s.button} type="button">Load More</button>
  )
}

export default Button;