import cx from 'classnames'
import Button from '@/components/Button'
import { ZeroOne } from '@/components/Svg'
import styles from './CallToAction.module.scss'

type Props = {
  title: string
  body: string
  buttonText: string
  buttonUrl: string
}

const CallToAction: React.FC<Props> = ({
  title,
  body,
  buttonText,
  buttonUrl,
}) => (
  <div className={cx(styles.wrap, 'container')}>
    <div className={styles.left}>
      <div className={styles.icon}>
        <ZeroOne />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p>{body}</p>
    </div>
    <div className={styles.right}>
      <Button buttonText={buttonText} buttonUrl={buttonUrl} />
    </div>
  </div>
)

export default CallToAction
