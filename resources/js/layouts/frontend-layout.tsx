import Footer from '@/components/frontend/footer'
import Header from '@/components/frontend/header'
import React, { ReactNode } from 'react'
import GlobalLayout from './global-layout'

export default function FrontendLayout({children}: {children:ReactNode}) {
  return (
    <GlobalLayout>
        <Header/>
            {children}
        <Footer/>
    </GlobalLayout>
  )
}
