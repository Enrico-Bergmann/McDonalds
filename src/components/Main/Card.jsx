import React from 'react';
import * as S from './card_style';

export default function Card( {imagem, texto} ) {
  return (
    <div>
      <img src={imagem} alt="" />
      <p>{texto}</p>
      <S.button>Clique aqui</S.button>
    </div>
  )
}
