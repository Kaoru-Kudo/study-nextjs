import Image from 'next/image'

export function LogoList() {
  return (
    <ul className={'top-logoList'}>
      <li className={'top-logoList__item'}>
        <Image
          // className={styles.logo}
          src='/google.png'
          alt='Google logo'
          width={150}
          height={49.14}
        />
      </li>
      <li className={'top-logoList__item'}>
        <Image
          // className={styles.logo}
          src='/microsoft.png'
          alt='Microsoft logo'
          width={200}
          height={42.68}
        />
      </li>
      <li className={'top-logoList__item'}>
        <Image
          // className={styles.logo}
          src='/airbnb.png'
          alt='airbnb logo'
          width={160}
          height={49.91}
        />
      </li>
      <li className={'top-logoList__item'}>
        <Image
          // className={styles.logo}
          src='/facebook.png'
          alt='facebook logo'
          width={190}
          height={36.77}
        />
      </li>
      <li className={'top-logoList__item'}>
        <Image
          // className={styles.logo}
          src='/spotify.png'
          alt='Spotify logo'
          width={160}
          height={47.96}
        />
      </li>
    </ul>
  )
}
