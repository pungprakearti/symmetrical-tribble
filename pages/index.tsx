import { navData, heroData, textAndImageData, CTAData } from 'mockData'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TextAndImage from '@/components/TextAndImage'
import styles from '@/styles/index.module.scss'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <div className={styles.wrap}>
      <Nav {...navData} />
      <Hero {...heroData} />
      <TextAndImage {...textAndImageData} />
      <CallToAction {...CTAData} />
    </div>
  )
}
