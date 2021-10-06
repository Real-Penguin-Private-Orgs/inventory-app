import style from '../styles/components/Form.module.css'

export default function Input(props) {
  return (
    <input 
        {...props}
        className={style.form_input_group}
    />
  )
}