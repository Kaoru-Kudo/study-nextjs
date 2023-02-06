import Image from 'next/image'

export function Header() {
  return (
    <header className={'l-header'}>
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
        className={'l-header__menuBtn'}
        type='button'
      >
        <span aria-hidden='true'></span>
      </button>
    </header>
  )
}
