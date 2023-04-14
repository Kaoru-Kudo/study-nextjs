import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'
import { LogoList } from '@/components/pages/top/LogoList'
import { PersonList } from '@/components/pages/top/PersonList'
import { Kv } from '@/components/pages/top/Kv'
import { SectionLead } from '@/components/common/SectionLead'
import { Btn } from '@/components/common/Btn'
import styles from '@/styles/sass/object/pages/plans.module.sass'

export default function Home() {
  return (
    <>
      <Head>
        <title>Plans｜Start</title>
        <meta name='description' content='You can choose the best from three types of plan.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <section
          id='plans'
          className={styles['plans-content']}
        >
          <div className={styles['plans-content__inner']}>
            <SectionLead
              subtitle={'PLANS'}
              title={'Our Services'}
            >
              Lorem ipsum, dolor sit amet consectetur
              <span>
                adipisicing elit.
              </span>
            </SectionLead>
            <ul>
              <li>
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
            </ul>


          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
