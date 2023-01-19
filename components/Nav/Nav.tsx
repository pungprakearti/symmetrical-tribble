import { useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import Button from '@/components/Button'
import styles from './Nav.module.scss'

type Props = {
  linkData: [
    {
      mainText: string
      mainUrl?: string
      dropDownData?: [
        {
          DDText: string
          DDUrl: string
        }
      ]
    }
  ]
  buttonText: string
  buttonUrl: string
}

const Nav: React.FC<Props> = ({ linkData, buttonText, buttonUrl }) => {
  const [selected, setSelected] = useState('Overview')

  let temp = []

  const navLinksEl = linkData.map((topData) => (
    <div className={styles.topLinkWrap}>
      {topData.dropDownData ? (
        <div className={cx(styles.topLink, { [styles.selected]: selected })}>
          {topData.mainText}
          <div>
            <>
              {console.log(topData.dropDownData)}
              {topData.dropDownData.map((bottomData) => (
                <Link href={bottomData.DDUrl}>{bottomData.DDText}</Link>
              ))}
            </>
          </div>
        </div>
      ) : (
        <Link
          href={topData.mainUrl ? topData.mainUrl : ''}
          className={cx(styles.topLink, { [styles.selected]: selected })}
        >
          {topData.mainText}
        </Link>
      )}
    </div>
  ))

  return (
    <nav className={styles.wrap}>
      LOGO
      <div>{navLinksEl}</div>
      <Button buttonText={buttonText} buttonUrl={buttonUrl} small />
    </nav>
  )
}
export default Nav
