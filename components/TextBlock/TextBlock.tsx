import cx from 'classnames'
import Button from '@/components/Button'
import styles from './TextBlock.module.scss'

type Props = {
  header: string
  title: string
  body: string
  buttonText: string
  buttonUrl: string
  dark?: boolean
}

const TextBlock: React.FC<Props> = ({
  header,
  title,
  body,
  buttonText,
  buttonUrl,
  dark = false,
}) => (
  <div className={cx(styles.wrap, { [styles.dark]: dark })}>
    <h2 className={styles.header}>{header}</h2>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.body}>{body}</p>
    <Button buttonText={buttonText} buttonUrl={buttonUrl} dark={dark} />
  </div>
)

export default TextBlock
