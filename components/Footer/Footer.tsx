import Link from 'next/link'
import cx from 'classnames'
import { LogoWhite } from '@/components/Svg'
import styles from './Footer.module.scss'

type Top = {
  title: string
  text1: string
  text2?: string
}

type Bottom = {
  text: string
  url: string
}

type Props = {
  top: Top[]
  bottom: Bottom[]
}

const Footer: React.FC<Props> = ({ top, bottom }) => {
  // Build footer elements
  const topRightEls = top.map((t, i) => (
    <div className={styles[`topItem__${i + 1}`]} key={t.title}>
      <h2 className={styles.title}>{t.title}</h2>

      {/* This is a little hacky, but if there is an '@' symbol, make it a mailto link */}
      {t.text1.includes('@') ? (
        <Link
          className={cx(styles.text, styles.text__link)}
          href={`mailto:${t.text1}`}
        >
          {t.text1}
        </Link>
      ) : (
        <p className={styles.text}>{t.text1}</p>
      )}

      {/* if there is a second line of text, add it here */}
      {t.text2 && <p className={styles.text}>{t.text2}</p>}
    </div>
  ))

  const bottomLeftEls = bottom.map((b) => (
    <Link className={styles.legalItem} href={b.url} key={b.text}>
      {b.text}
    </Link>
  ))

  // Use Date.now to show current year
  const rights = `© WEISS Limited | ${new Date().getFullYear()} All Rights Reserved.`

  return (
    <div className={styles.outer}>
      <footer className={cx(styles.wrap, 'container')}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <Link href='/'>
              <LogoWhite />
            </Link>
          </div>
          {topRightEls}
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>{bottomLeftEls}</div>
          <div className={styles.rights}>{rights}</div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
