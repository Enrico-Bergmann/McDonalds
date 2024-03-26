import React from 'react'
import * as S from './footer_style'
import mcpeq from '../../assets/mcpeq.png'
import ios from '../../assets/ios.png'
import android from '../../assets/android.png'

export default function Footer() {
  return (
    <S.Footer>
    <section>
        <div>
          <img src={mcpeq} alt="" />
           <h3>© McDonald’s 2024</h3>
        </div>
        <div>
        <img src={android} alt="" />
        <img src={ios} alt="" />
        </div>
    </section>
    </S.Footer>
  )
}
