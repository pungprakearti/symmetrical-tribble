import cx from 'classnames'
import Nav from '@/components/Nav'
import { navData, heroData } from 'mockData'
import styles from '@/styles/index.module.scss'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className={styles.wrap}>
      <Nav
        linkData={navData.linkData}
        buttonText={navData.buttonText}
        buttonUrl={navData.buttonUrl}
      />
      <Hero text={heroData.text} video={heroData.video} />
    </div>
  )
}
