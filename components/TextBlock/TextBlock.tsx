import Button from '@/components/Button'
import styles from './TextBlock.module.scss'

type Props = {
  header: string
  title: string
  body: string
  buttonText: string
  buttonUrl: string
}

const TextBlock: React.FC<Props> = ({
  header,
  title,
  body,
  buttonText,
  buttonUrl,
}) => (
  <div className={styles.wrap}>
    <h2 className={styles.header}>{header}</h2>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.body}>{body}</p>
    <Button buttonText={buttonText} buttonUrl={buttonUrl} />
  </div>
)

export default TextBlock
