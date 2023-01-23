import { useState } from 'react'
import cx from 'classnames'
import { ArrowRight, CloseAccordion } from '@/components/Svg'
import styles from './Accordion.module.scss'

type Image = {
  src: string
  alt: string
}

type Media = {
  video: string
  image1: Image
  image2: Image
}

type Stats = {
  number: number
  text: string
}

type Accordion = {
  title: string
  body: string
}

type Props = {
  media: Media
  stats: Stats[]
  accordion: Accordion[]
}

const Accordion: React.FC<Props> = ({ media, stats, accordion }) => {
  const [active, setActive] = useState(1)

  const handleSelect = (accNum: number) => {
    setActive(accNum)
  }

  const statsEl = stats.map((stat, i) => (
    <div className={styles.stat} key={`${i}-${stat.number}`}>
      <h3 className={styles.statNumber}>{stat.number}</h3>
      <p className={styles.statText}>{stat.text}</p>
    </div>
  ))

  const accordionEl = accordion.map((a, i) => (
    <div
      className={cx(styles.accordionItem, { [styles.active]: active === i })}
      key={`${i}-${a.title}`}
    >
      <div className={styles.accordionTitle} onClick={() => handleSelect(i)}>
        <div className={styles.activeArrow}>
          <ArrowRight />
        </div>
        {a.title}
        <div className={styles.toggleIcon}>
          <div className={styles.horizontal}>
            <CloseAccordion />
          </div>
          <div className={styles.vertical}>
            <CloseAccordion />
          </div>
        </div>
      </div>
      <p className={styles.accordionText}>{a.body}</p>
    </div>
  ))

  return (
    <div className={cx(styles.wrap, 'container-grid')}>
      <div className={styles.left}>
        <div className={styles.videoWrap}>
          <video className={styles.video} loop>
            <source src={media.video} type='video/mp4' />
          </video>
        </div>
        <div className={styles.images}>
          <div className={styles.imageWrap}>
            <img
              className={styles.image}
              src={media.image1.src}
              alt={media.image1.alt}
            />
          </div>
          <div className={styles.imageWrap}>
            <img
              className={styles.image}
              src={media.image2.src}
              alt={media.image2.alt}
            />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.statsWrap}>{statsEl}</div>
        <div className={styles.accordion}>{accordionEl}</div>
      </div>
    </div>
  )
}

export default Accordion
