import styles from '@/styles/sass/top.module.sass'

export type Props = {
  subtitle: String
  title: String
  children: any
}

export function SectionLead(props: Props) {
  return (
    <div>
      <p
        className={styles['c-sectionLead__subTtl']}
      >{props.subtitle}
      </p>
      <h2
        className={styles['c-sectionLead__ttl']}
      >
        {props.title}
      </h2>
      <p
        className={styles['c-sectionLead__txt']}
      >
        {props.children}
      </p>
    </div >
  )
}