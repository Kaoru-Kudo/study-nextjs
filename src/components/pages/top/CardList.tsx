import Image from 'next/image'

export function CardList() {
  return (
    <ul className={'top-cardList'}>
      <li className={'top-cardList__item'}>
        <div
          className={'c-illustCard'}
        >
          <Image
            // className={styles.logo}
            src='/team_illust_01.svg'
            alt=''
            width={175}
            height={175}
          />
          <p
            className={'c-illustCard__ttl'}
          >
            Peg Legge
          </p>
          <p
            className={'c-illustCard__txt'}
          >
            CEO
          </p>
        </div>
      </li>
      <li className={'top-cardList__item'}>
        <div
          className={'c-illustCard'}
        >
          <Image
            // className={styles.logo}
            src='/team_illust_02.svg'
            alt=''
            width={175}
            height={175}
          />
          <p
            className={'c-illustCard__ttl'}
          >
            Richard Guerra
          </p>
          <p
            className={'c-illustCard__txt'}
          >
            CTO
          </p>
        </div>
      </li>
      <li className={'top-cardList__item'}>
        <div
          className={'c-illustCard'}
        >
          <Image
            // className={styles.logo}
            src='/team_illust_03.svg'
            alt=''
            width={175}
            height={175}
          />
          <p
            className={'c-illustCard__ttl'}
          >
            Alexandra Stolz
          </p>
          <p
            className={'c-illustCard__txt'}
          >
            DESIGNER
          </p>
        </div>
      </li>
      <li className={'top-cardList__item'}>
        <div
          className={'c-illustCard'}
        >
          <Image
            // className={styles.logo}
            src='/team_illust_01.svg'
            alt=''
            width={175}
            height={175}
          />
          <p
            className={'c-illustCard__ttl'}
          >
            Janet Bray
          </p>
          <p
            className={'c-illustCard__txt'}
          >
            DEVELOPER
          </p>
        </div>
      </li>
    </ul>
  )
}