import React from 'react';
import * as S from './header_style';
import logo from "../../assets/logo.png";
import app from "../../assets/app.png";
import app2 from "../../assets/app2.png";

export default function Header() {
  return (
    <S.Header>
      <img src={logo} alt="" />

    <section>
      <div>
        <img src={app} alt="" />
         <h3>Baixe o app</h3>
      </div>
      <div>
        <h3>Peça seu Méqui</h3>
        <img src={app2} alt="" />
      </div>
    </section>

    </S.Header>
  )
}
