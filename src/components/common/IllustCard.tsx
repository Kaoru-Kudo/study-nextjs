import Image from 'next/image'
import styles from '@/styles/sass/top.module.sass'

export type Props = {
  name: String;
  category: String;
  src: String;
}

export function IllustCard(props: Props) {
  return (
    <div
      className={styles['c-illustCard']}
    >
      <Image
        src={`${props.src}`}
        alt=''
        width={175}
        height={175}
      />
      <p
        className={styles['c-illustCard__ttl']}
      >
        {props.name}
      </p>
      <p
        className={styles['c-illustCard__txt']}
      >
        {props.category}
      </p>
    </div>
  )
}