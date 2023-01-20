import cx from 'classnames'
import TextBlock from '@/components/TextBlock'
import styles from './Hero.module.scss'

type Text = {
  header: string
  title: string
  body: string
  buttonText: string
  buttonUrl: string
}

type Props = {
  text: Text
  video: string[]
}

const Hero: React.FC<Props> = ({ text, video }) => {
  return (
    <div className={styles.outer}>
      <div className={cx(styles.wrap, 'container-grid')}>
        <div className={styles.left}>
          <TextBlock {...text} />
        </div>
        <div className={styles.right}>Video Carousel</div>
      </div>
    </div>
  )
}

export default Hero
