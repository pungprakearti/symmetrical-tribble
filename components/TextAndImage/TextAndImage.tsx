import TextBlock from '@/components/TextBlock'
import { GraphicLargeSquares, GraphicSquares } from '@/components/Svg'
import styles from './TextAndImage.module.scss'

type Props = {
  text: {
    header: string
    title: string
    body: string
    buttonText: string
    buttonUrl: string
  }
  image: {
    src: string
    alt: string
  }
}

const TextAndImage: React.FC<Props> = ({ text, image }) => (
  <div className={styles.outer}>
    <div className='container-grid'>
      <div className={styles.left}>
        <div className={styles.textBlockWrap}>
          <TextBlock {...text} dark />
        </div>
        <div className={styles.graphic2}>
          <GraphicSquares />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imageWrap}>
          <img className={styles.image} src={image.src} alt={image.alt} />
        </div>
        <div className={styles.graphic1}>
          <GraphicLargeSquares />
        </div>
      </div>
    </div>
  </div>
)

export default TextAndImage
