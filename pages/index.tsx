import {
  navData,
  heroData,
  textAndImageData,
  CTAData,
  accordionData,
  footerData,
} from 'mockData'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TextAndImage from '@/components/TextAndImage'
import styles from '@/styles/index.module.scss'
import CallToAction from '@/components/CallToAction'
import Accordion from '@/components/Accordion'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className={styles.wrap}>
      <Nav {...navData} />
      <Hero {...heroData} />
      <TextAndImage {...textAndImageData} />
      <CallToAction {...CTAData} />
      <Accordion {...accordionData} />
      <Footer {...footerData} />
    </div>
  )
}
