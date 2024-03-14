import classNames from 'classnames'

interface HamubrgerIconProps {
  onClick?: () => void
  className?: string
}

const HamburgerIcon = ({
  onClick,
  className,

}: HamubrgerIconProps) => {
  const hamburgerColors = classNames({
    black:true
  })

  return (
    <svg
      className={className}
      onClick={onClick}
      width="26"
      height="20"
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="open mobile menu button"
    >
      <line
        x1="1"
        y1="1"
        x2="25"
        y2="1"
        stroke={hamburgerColors}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="10"
        x2="25"
        y2="10"
        stroke={hamburgerColors}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="19"
        x2="25"
        y2="19"
        stroke={hamburgerColors}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default HamburgerIcon
