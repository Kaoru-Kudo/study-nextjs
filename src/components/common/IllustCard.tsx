import Image from 'next/image'

export type Props = {
  name: String;
  category: String;
  src: String;
}

export function IllustCard(props: Props) {
  return (
    <div
      className={'c-illustCard'}
    >
      <Image
        // className={styles.logo}
        src={`${props.src}`}
        alt=''
        width={175}
        height={175}
      />
      <p
        className={'c-illustCard__ttl'}
      >
        {props.name}
      </p>
      <p
        className={'c-illustCard__txt'}
      >
        {props.category}
      </p>
    </div>
  )
}