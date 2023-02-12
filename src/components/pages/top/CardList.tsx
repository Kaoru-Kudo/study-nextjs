import { IllustCard } from '@/components/common/IllustCard'
import styles from '@/styles/sass/top.module.sass'

export function CardList() {
  return (
    <ul className={styles['top-cardList']}>
      <li className={styles['top-cardList__item']}>
        <IllustCard
          name='Peg Legge'
          category='CEO'
          src='/team_illust_01.svg'
        />
      </li>
      <li className={styles['top-cardList__item']}>
        <IllustCard
          name='Richard Guerra'
          category='CTO'
          src='/team_illust_02.svg'
        />
      </li>
      <li className={styles['top-cardList__item']}>
        <IllustCard
          name='Alexandra Stolz'
          category='DESIGNER'
          src='/team_illust_03.svg'
        />
      </li>
      <li className={styles['top-cardList__item']}>
        <IllustCard
          name='Janet Bray'
          category='DEVELOPER'
          src='/team_illust_04.svg'
        />
      </li>
    </ul>
  )
}