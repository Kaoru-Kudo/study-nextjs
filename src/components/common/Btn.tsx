import styles from '@/styles/sass/object/component/btn.module.sass'

export type Props = {
  txt: String
  style: String
}

export function Btn(props: Props) {
  return (
    <a
      // className={`${styles['c-btn']} ${styles['c-btn--primary']}`}
      className={[styles['c-btn'], styles[`${props.style}`]].join(' ')}
      href='#'
    >
      {props.txt}
    </a>
  )
}