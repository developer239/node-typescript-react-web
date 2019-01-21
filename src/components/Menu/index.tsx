import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface InnerProps {
  links: { id: number; to: string; label: string }[]
}

const Menu: FC<InnerProps> = ({ links }) => (
  <nav>
    {links.map(link => (
      <Link key={link.id} to={link.to}>
        {link.label}
      </Link>
    ))}
  </nav>
)

export default Menu
