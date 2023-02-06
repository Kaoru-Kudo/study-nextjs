import Image from 'next/image'

export function Kv() {
  return (
    <div className={'top-kv'}>
      <Image
        // className={styles.logo}
        src='/kv_illust.svg'
        alt=''
        width={335}
        height={197}
      />
      <p
        className={'top-kv__sub'}
      >
        WELCOME
      </p>
      <h1
        className={'top-kv__ttl'}
      >
        Lorem ipsum dolor sit amet consectetur
      </h1>
      <p
        className={'top-kv__txt'}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
      </p>
      <div className={'top-kv__btnWrap'}>
        <a
          className={'c-btn c-btn--kv'}
          href='#'
        >
          Explore
        </a>
      </div>
    </div>
  )
}