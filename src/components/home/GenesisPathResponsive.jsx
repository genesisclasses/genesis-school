'use client';
import React from 'react';
import Image from 'next/image';
import styles from '@/components/css/GenesisPathResponsive.module.css';
import { genesisCards } from '@/data/genesis-path';

const circleIcon = '/assets/home/genesis-path/circle-icon.svg';

// Margin configs per card for responsive design
const numberImgMargins = [
  { marginTop: '8rem', marginRight: '0px' }, // Card 1
  { marginTop: '8rem', marginRight: '30px' },  // Card 2
  { marginTop: '8rem', marginRight: '25px' },  // Card 3
];

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
            {card.numberImg && (
              <Image
                src={card.numberImg}
                alt={`number-${idx + 1}`}
                width={74}
                height={74}
                className={styles.numberImg}
                style={{
                  marginTop: numberImgMargins[idx].marginTop,
                  marginRight: numberImgMargins[idx].marginRight,
                }}
              />
            )}
          </div>
          <div className={styles.cardContent}>
            <h3>{card.title}</h3>
            <div className={styles.subtitle}>{card.subtitle}</div>
            {card.hindiText && (
              <div className="text-[16px] xl:text-[20px] font-medium text-[#444444] mb-2">
                {card.hindiText}
              </div>
            )}
            <div className="text-[14px] xl:text-[16px] text-[#777777] whitespace-pre-line text-justify">
              {card.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GenesisPathResponsive;
