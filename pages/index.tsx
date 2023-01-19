import cx from 'classnames'
import Nav from '@/components/Nav'
import { navData } from 'mockData'
import styles from '@/styles/index.module.scss'

export default function Home() {
  return (
    <div className={cx(styles.wrap, ' container')}>
      <Nav
        linkData={navData.linkData}
        buttonText={navData.buttonText}
        buttonUrl={navData.buttonUrl}
      />
    </div>
  )
}
