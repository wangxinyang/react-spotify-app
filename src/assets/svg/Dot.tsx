import * as React from 'react'
import { SVGProps } from 'react'

const SvgDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={32}
    width={32}
    viewBox="0 0 24 24"
    className="dot_svg__Svg-sc-1bi12j5-0 dot_svg__EQkJl"
    {...props}
  >
    <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
  </svg>
)

export default SvgDot
