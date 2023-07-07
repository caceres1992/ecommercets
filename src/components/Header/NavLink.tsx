"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
  title: string,
  nameUrl: string
}

const NavLink = ({ title, nameUrl }: Props) => {

  const pathName = usePathname()
  console.log('router', pathName)
  return (
    <Link
      href={nameUrl}
      className={`  font-medium   ${pathName === nameUrl ? ' text-gray-700' : ' text-gray-400'} `}>{title}</Link>
  )
}

export default NavLink