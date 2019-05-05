import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface IInnerProps {
  links: Array<{ id: number; to: string; label: string }>
}

const Menu: FC<IInnerProps> = ({ links }) => (
  <nav>
    {links.map(link => (
      <Link key={link.id} to={link.to}>
        {link.label}
      </Link>
    ))}
  </nav>
)

export default Menu
