import React from 'react'
import LeftSidebar from '../organisms/navigation/LeftSidebar'
import RightMenu from '../organisms/navigation/RightMenu'

type Props = {
  children: React.ReactNode
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col bg-dark text-white lg:flex-row">
      <LeftSidebar />
      <main className="order-1 w-full min-w-0 flex-1 lg:order-2">{children}</main>
      <RightMenu />
    </div>
  )
}

export default HomeLayout
