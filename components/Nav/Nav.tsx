import { useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import Button from '@/components/Button'
import { ArrowDropDown, Logo } from '@/components/Svg'
import styles from './Nav.module.scss'

type DDData = {
  DDText: string
  DDUrl: string
}

type TLData = {
  mainText: string
  mainUrl?: string
  dropDownData?: DDData[]
}

type Props = {
  linkData: TLData[]
  buttonText: string
  buttonUrl: string
}

const Nav: React.FC<Props> = ({ linkData, buttonText, buttonUrl }) => {
  // This has no real functionality right now, but with multiple pages,
  // this is how you would change the selected link.
  const [selected, setSelected] = useState('Overview')

  // Build nav links and drop down elements
  const navLinksEl = linkData.map((topData) => (
    <div className={styles.topLinkWrap} key={topData.mainText}>
      {/* If there is drop down elements, create it */}
      {topData.dropDownData ? (
        <div className={styles.topLinkWithDropDown}>
          <div
            className={cx(styles.topLink, {
              [styles.selected]: selected === topData.mainText,
            })}
            key={topData.mainText}
          >
            {topData.mainText}
            <div className={styles.dropDown}>
              {topData.dropDownData.map((bottomData) => (
                <Link
                  className={styles.dropDownItem}
                  href={bottomData.DDUrl}
                  key={bottomData.DDText}
                >
                  {bottomData.DDText}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.icon}>
            <ArrowDropDown />
          </div>
        </div>
      ) : (
        <div
          className={cx(styles.topLink, {
            [styles.selected]: selected === topData.mainText,
          })}
        >
          <Link
            className={styles.mainLink}
            href={topData.mainUrl ? topData.mainUrl : ''}
            key={topData.mainText}
          >
            {topData.mainText}
          </Link>
        </div>
      )}
    </div>
  ))

  return (
    <nav className={cx(styles.wrap, 'container')}>
      <Link className={styles.logo} href='/'>
        <Logo />
      </Link>
      <div className={styles.navLinks}>{navLinksEl}</div>
      <Button buttonText={buttonText} buttonUrl={buttonUrl} small />
    </nav>
  )
}
export default Nav
