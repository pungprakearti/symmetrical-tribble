import Link from 'next/link'
import cx from 'classnames'
import { ChevronRight } from '@/components/Svg'
import styles from './Button.module.scss'

type Props = {
  buttonText: string
  buttonUrl: string
  small?: boolean
}

const Button: React.FC<Props> = ({ buttonText, buttonUrl, small = false }) => (
  <Link className={cx(styles.wrap, { [styles.small]: small })} href={buttonUrl}>
    {buttonText}
    <ChevronRight />
  </Link>
)

export default Button
