import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'
import { LogoList } from '@/components/pages/top/LogoList'
import { CardList } from '@/components/pages/top/CardList'
import { Kv } from '@/components/pages/top/Kv'
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
          className={'top-content'}
        >
          <div className={'top-content__inner'}>
            <p
              className={'top-content__subTtl'}
            >PARTNERS
            </p>
            <h2
              className={'top-content__ttl--primary'}
            >
              Lorem Ipsum Dolor
            </h2>
            <p
              className={'top-content__leadTxt'}
            >
              Lorem ipsum, dolor sit amet consectetur
              <span>
                adipisicing elit.
              </span>
            </p>
            <LogoList />
            <div className={'top-content__btnWrap'}>
              <a
                className={'c-btn c-btn--primary'}
                href='#'
              >
                Learn More
              </a>
            </div>
            <div className={'top-content__desc'}>
              <Image
                // className={styles.logo}
                src='/partner_illust_01.svg'
                alt=''
                width={335}
                height={240.88}
              />
              <h3
                className={'top-content__ttl--secondary'}
              >
                Lorem ipsum dolor sit amet consectetur
              </h3>
              <p className={'top-content__txt'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
              </p>
              <div className={'top-content__btnWrap--other'}>
                <a
                  className={'c-btn c-btn--primary'}
                  href='#'
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className={'top-content__desc'}>
              <Image
                // className={styles.logo}
                src='/partner_illust_02.svg'
                alt=''
                width={335}
                height={240.88}
              />
              <h3
                className={'top-content__ttl--secondary'}
              >
                Lorem ipsum dolor sit amet consectetur
              </h3>
              <p className={'top-content__txt'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
              </p>
              <div className={'top-content__btnWrap--other'}>
                <a
                  className={'c-btn c-btn--primary'}
                  href='#'
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id='team'
          className={'top-content'}
        >
          <div className={'top-content__inner'}>
            <p
              className={'top-content__subTtl'}
            >
              TEAM</p>
            <h2
              className={'top-content__ttl--primary'}
            >
              Our Talents</h2>
            <p
              className={'top-content__leadTxt'}
            >
              Lorem ipsum, dolor sit amet consectetur
              <span>
                adipisicing elit.
              </span>
            </p>
            <CardList />
            <div className={'top-content__btnWrap'}>
              <a
                className={'c-btn c-btn--primary'}
                href='#'
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
