'use client';
import React from 'react';
import Image from 'next/image';
import styles from '@/components/css/GenesisPathResponsive.module.css'; // import CSS module

const genesisCards = [
  {
    title: 'Dhruvshilla',
    subtitle: 'Nursery to 3rd Grade',
    description: `Rooted in the spirit of constancy, Dhruvshilla builds the emotional and intellectual base for every child. Here, curiosity blossoms through joyful learning, play, and imagination — forming values that stay lifelong.`,
    numberImg: '/assets/home/genesis-path/1.svg',
  },
  {
    title: 'Gyanshila',
    subtitle: '4th to 8th Grade',
    description: `"उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत" Inspired by the Upanishadic call – "Arise, awake, and seek knowledge" – this stage empowers students to think critically, explore widely, and embrace knowledge as a journey, not a destination. Every question is celebrated, every idea nurtured.`,
    numberImg: '/assets/home/genesis-path/2.svg',
  },
  {
    title: 'Dhruvshilla',
    subtitle: '9th to 12th Grade',
    description: `सम्पाद्य स्वम् तद्वद हि तत्र सम्पद्यम् भूयात् | The final stage transforms insight into action. KarmShilla cultivates discipline, integrity, and determination — guiding students to lead with purpose, wisdom, and confidence in the real world.`,
    numberImg: '/assets/home/genesis-path/3.svg',
  },
];


const circleIcon = '/assets/home/genesis-path/circle-icon.svg';

const GenesisPathResponsive = () => (
  <div className={styles.container} id='/#academics-section'>
    <div className={styles.heading}>
      <h2>
        The Genesis Path to <br />
        <span className={styles.highlight}>Academic Excellence</span>
      </h2>
      <p>Where every stage shapes character, wisdom, and purpose.</p>
    </div>

    <div className={styles.cards}>
      {genesisCards.map((card, idx) => (
        <div className={styles.card} key={idx}>
          <div className={styles.imagesRow}>
            <Image src={circleIcon} alt="circle" width={130} height={130} />
            <Image
              src={card.numberImg}
              alt={`number-${idx + 1}`}
              width={94}
              height={194}
              className={styles.numberImg}
            />
          </div>
          <div className={styles.cardContent}>
            <h3>{card.title}</h3>
            <div className={styles.subtitle}>{card.subtitle}</div>
            <div className={styles.description}>{card.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GenesisPathResponsive;
