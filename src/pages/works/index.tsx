import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '@/styles/sass/object/pages/works.module.sass'
import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'
import { SectionLead } from '@/components/common/SectionLead'
import { Btn } from '@/components/common/Btn'

export type Dog = {
  message: String
  status: String
}

export default function Works() {
  const [dogImage, setDogImage] = useState<Dog>()

  useEffect(() => {
    fetch('https://dog.ceo/api/breed/shihtzu/images', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setDogImage(data)
      })
  }, [])

  return (
    <>
      <Head>
        <title>Works｜Start</title>
        <meta name='description' content='You can see our works here.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <section className={styles['works-content']}>
          <div className={styles['works-content__inner']}>
            <SectionLead
              subtitle={'WORKS'}
              title={'Portfolio'}
            >
              Lorem ipsum, dolor sit amet consectetur
              <span>
                adipisicing elit.
              </span>
            </SectionLead>
            <ul className={styles['works-imgList']}>
              {
                !!dogImage ?
                  // catImage.message.foreach((item) => { return <li>{item}</li> })
                  (Object.values(dogImage.message)).slice(0, 10).map((itemURL) => { return <li key={itemURL} className={styles['works-imgList__item']}><Image className={styles['works-img']} src={`${itemURL}`} alt="" width={335} height={202.21} /></li> })
                  : "error"
              }
            </ul>
            <div className={styles['works-content__btnWrap']}>
              <Btn txt={'Learn More'} style={'c-btn--primary'} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
