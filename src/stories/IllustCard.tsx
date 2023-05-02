import React from 'react';
import Image from 'next/image'
import './illustCard.css';
import styles from '@/styles/sass/top.module.sass'

interface IllustCardProps {
  /**
   * 名前
   */
  name: string;
  /**
   * 職種・役職など
   */
  category: string;
  /**
   * 画像パス
   */
  src: string;
}

/**
 * 人物イラスト・人物名・職種/役職を表示するためのカードです
 */
export const IllustCard = ({
  name = '山田太郎',
  category = 'WEBデザイナー',
  src = 'https://placehold.jp/300x300.png',
}: IllustCardProps) => {
  return (
    <div
      className={styles['c-illustCard']}
    >
      <Image
        src={src}
        alt=''
        width={175}
        height={175}
      />
      <p
        className={styles['c-illustCard__ttl']}
      >
        {name}
      </p>
      <p
        className={styles['c-illustCard__txt']}
      >
        {category}
      </p>
    </div>
  );
};
