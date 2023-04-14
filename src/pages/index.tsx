import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'
import { LogoList } from '@/components/pages/top/LogoList'
import { PersonList } from '@/components/pages/top/PersonList'
import { Kv } from '@/components/pages/top/Kv'
import { SectionLead } from '@/components/common/SectionLead'
import { Btn } from '@/components/common/Btn'
import styles from '@/styles/sass/top.module.sass'

// import styles from '@/styles/Home.module.sass'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Start｜Lorem ipsum dolor sit amet consectetur</title>
        <meta name='description' content='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <Kv />
        <section
          id='partners'
          className={styles['top-content']}
        >
          <div className={styles['top-content__inner']}>
            <SectionLead
              subtitle={'PARTNERS'}
              title={'Lorem Ipsum Dolor'}
            >
              Lorem ipsum, dolor sit amet consectetur
              <span>
                adipisicing elit.
              </span>
            </SectionLead>
            <LogoList />
            <div className={styles['top-content__btnWrap']}>
              <Btn txt={'Learn More'} style={'c-btn--primary'} />
            </div>
            <div className={styles['top-content__desc']}>
              <Image
                // className={styles.logo}
                src='/partner_illust_01.svg'
                alt=''
                width={335}
                height={240.88}
              />
              <h3
                className={styles['top-content__ttl--secondary']}
              >
                Lorem ipsum dolor sit amet consectetur
              </h3>
              <p className={styles['top-content__txt']}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
              </p>
              <div className={styles['top-content__btnWrap--other']}>
                <Btn txt={'Learn More'} style={'c-btn--primary'} />
              </div>
            </div>
            <div className={styles['top-content__desc']}>
              <Image
                // className={styles.logo}
                src='/partner_illust_02.svg'
                alt=''
                width={335}
                height={240.88}
              />
              <h3
                className={styles['top-content__ttl--secondary']}
              >
                Lorem ipsum dolor sit amet consectetur
              </h3>
              <p className={styles['top-content__txt']}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
              </p>
              <div className={styles['top-content__btnWrap--other']}>
                <Btn txt={'Learn More'} style={'c-btn--primary'} />
              </div>
            </div>
          </div>
        </section>
        <section
          id='team'
          className={styles['top-content']}
        >
          <div className={styles['top-content__inner']}>
            <SectionLead
              subtitle={'TEAM'}
              title={'Our Talents'}
            >
              Lorem ipsum, dolor sit amet consectetur
              <span>
                adipisicing elit.
              </span>
            </SectionLead>
            <PersonList />
            <div className={styles['top-content__btnWrap']}>
              <Btn txt={'Learn More'} style={'c-btn--primary'} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
