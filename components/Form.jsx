import style from '../styles/components/Form.module.css'

export default function Form(props) {
  return (
    <div className={style.form_container}>
            <form className={style.form_flex} {...props}>
                {props.children}
            </form>
    </div>
  )
}