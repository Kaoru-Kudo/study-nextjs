import Image from 'next/image'
import styles from '@/styles/sass/layout/header.module.sass'

export function Header() {
  return (
    <header className={styles['l-header']}>
      <a
        href='/'
      >
        <Image
          // className={styles.logo}
          src='/logo_start.svg'
          alt='start'
          width={129}
          height={38}
          priority
        />
      </a>
      <button
        className={styles['l-header__menuBtn']}
        type='button'
      >
        <span aria-hidden='true'></span>
      </button>
    </header>
  )
}
