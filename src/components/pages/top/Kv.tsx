import Image from 'next/image'
import styles from '@/styles/sass/top.module.sass'
import { Btn } from '@/components/common/Btn'

export function Kv() {
  return (
    <div className={styles['top-kv']}>
      <Image
        // className={styles.logo}
        src='/kv_illust.svg'
        alt=''
        width={335}
        height={197}
      />
      <p
        className={styles['top-kv__sub']}
      >
        WELCOME
      </p>
      <h1
        className={styles['top-kv__ttl']}
      >
        Lorem ipsum dolor sit amet consectetur
      </h1>
      <p
        className={styles['top-kv__txt']}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
      </p>
      <div className={styles['top-kv__btnWrap']}>
        <Btn txt={'Explore'} style={'c-btn--kv'} />
      </div>
    </div>
  )
}