type Props = {
  color?: string
}

const ChevronRight: React.FC<Props> = ({ color = '#263640' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='12' height='2' fill='none'>
    <path stroke={color} d='M0 1h12' />
  </svg>
)

export default ChevronRight
