import Image from 'next/image'

export function Footer() {
  return (
    <footer className={'l-footer'}>
      <ul
        className={'l-footerLink'}
      >
        <li
          className={'l-footerLink__item'}
        >
          <a
            href='#'
            className={'l-footerLink__icon'}
          >
            <Image
              // className={styles.logo}
              src='/icon_sns_01.svg'
              alt='facebook'
              width={9.64}
              height={18}
            />
          </a>
        </li>
        <li
          className={'l-footerLink__item'}
        >
          <a
            href='#'
            className={'l-footerLink__icon'}
          >
            <Image
              // className={styles.logo}
              src='/icon_sns_02.svg'
              alt='instagram'
              width={18}
              height={18}
            />
          </a>
        </li>
        <li
          className={'l-footerLink__item'}
        >
          <a
            href='#'
            className={'l-footerLink__icon'}
          >
            <Image
              // className={styles.logo}
              src='/icon_sns_03.svg'
              alt='twitter'
              width={21.87}
              height={18}
            />
          </a>
        </li>
        <li
          className={'l-footerLink__item'}
        >
          <a
            href='#'
            className={'l-footerLink__icon'}
          >
            <Image
              // className={styles.logo}
              src='/icon_sns_04.svg'
              alt='pinterest'
              width={13.94}
              height={18}
            />
          </a>
        </li>
        <li
          className={'l-footerLink__item'}
        >
          <a
            href='#'
            className={'l-footerLink__icon'}
          >
            <Image
              // className={styles.logo}
              src='/icon_sns_05.svg'
              alt='tiktok'
              width={15.4}
              height={18}
            />
          </a>
        </li>
        <li
          className={'l-footerLink__item'}
        >
          <a
            href='#'
            className={'l-footerLink__icon'}
          >
            <Image
              // className={styles.logo}
              src='/icon_sns_06.svg'
              alt='phone'
              width={17.96}
              height={18}
            />
          </a>
        </li>
        <li
          className={'l-footerLink__item'}
        >
          <a
            href='#'
            className={'l-footerLink__icon'}
          >
            <Image
              // className={styles.logo}
              src='/icon_sns_07.svg'
              alt='youtube'
              width={25.71}
              height={18}
            />
          </a>
        </li>
      </ul>
      <p className={'l-footer__txt'}>
        © Start, 2022. All rights reserved.
      </p>
    </footer>
  )
}
