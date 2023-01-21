import { navData, heroData, textAndImageData } from 'mockData'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TextAndImage from '@/components/TextAndImage'
import styles from '@/styles/index.module.scss'

export default function Home() {
  return (
    <div className={styles.wrap}>
      <Nav
        linkData={navData.linkData}
        buttonText={navData.buttonText}
        buttonUrl={navData.buttonUrl}
      />
      <Hero text={heroData.text} video={heroData.video} />
      <TextAndImage
        text={textAndImageData.text}
        image={textAndImageData.image}
      />
    </div>
  )
}
