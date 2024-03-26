import React from 'react'
import * as S from './main_style'
import Card from './Card'
import pacote from '../../assets/pacote.png'
import restaurante from '../../assets/restaurante.png'
import bannerpe from '../../assets/bannerpe.png'
import bigmacp from '../../assets/bigmacp.png'
import batata from '../../assets/batata.png'
import sorvete from '../../assets/sorvete.png'
import bigmac from '../../assets/bigmac.png'

export default function Main() {
  return (
    <main>
      <S.Section>
        <div>
            <img src={bigmac} alt="" />
            <h1>BATEU AQUELA #FOME DE MÉQUI?</h1>
        </div>
        <S.figure>
            <img src={bigmacp} alt="" />
            <img src={batata} alt="" />
            <img src={sorvete} alt="" />
        </S.figure>
      </S.Section>
         
        <S.h2>Promoção</S.h2>

      <S.Section2>
        <Card imagem={pacote} texto={'Que tal um #MéquiNoSofá?'} />
        <Card imagem={restaurante} texto={'Venha conhecer nossa nova loja'} />
        <Card imagem={bannerpe} texto={'Confira as medidas que o Méqui adotou!'} />
      </S.Section2>
    </main>
  )
}
