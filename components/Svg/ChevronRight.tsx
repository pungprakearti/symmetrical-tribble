type Props = {
  color?: string
}

const ChevronRight: React.FC<Props> = ({ color = '#ffffff' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='8' height='12' fill='none'>
    <path fill={color} d='M2 0 .59 1.41 5.17 6 .59 10.59 2 12l6-6-6-6Z' />
  </svg>
)

export default ChevronRight
