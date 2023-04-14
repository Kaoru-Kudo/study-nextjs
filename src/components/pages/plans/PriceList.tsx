import { IllustCard } from '@/components/common/IllustCard'
import { Btn } from '@/components/common/Btn'
import styles from '@/styles/sass/object/pages/plans.module.sass'

export function PriceList() {
  return (
    <ul className={styles['plans-priceList']}>
      <li className={styles['plans-priceList__item']}>
        <div>
          <h3>Basic</h3>
          <p><em>$100</em> /month</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam
          </p>
          <ul>
            <li>
              <div>
                <i></i>
                <p>Lorem ipsum, dolor sit </p>
              </div>
            </li>
          </ul>
          <div className={styles['plans-content__btnWrap']}>
            <Btn txt={'Learn More'} style={'c-btn--primary'} />
          </div>
        </div>
      </li>
      <li className={styles['plans-priceList__item']}>
        <IllustCard
          name='Richard Guerra'
          category='CTO'
          src='/team_illust_02.svg'
        />
      </li>
      <li className={styles['plans-priceList__item']}>
        <IllustCard
          name='Alexandra Stolz'
          category='DESIGNER'
          src='/team_illust_03.svg'
        />
      </li>
      <li className={styles['plans-priceList__item']}>
        <IllustCard
          name='Janet Bray'
          category='DEVELOPER'
          src='/team_illust_04.svg'
        />
      </li>
    </ul>
  )
}