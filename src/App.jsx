import React from 'react'
import Header from './components/Header/Header'
import * as S from './components/Header/header_style'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
    <S.GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}
