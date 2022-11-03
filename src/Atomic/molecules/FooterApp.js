import React from 'react'
import AtomGrid from '../atoms/AtomGrid';
import AtomImageApp from '../atoms/AtomImageApp';
import AtomTypography from '../atoms/AtomTypography';

const FooterApp = () => {
  return (
    <AtomGrid container columnSpacing={2} sx={{ margin: "21px 0px" }}>
      <AtomGrid item>
        <AtomTypography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          TẢI ỨNG DỤNG!
        </AtomTypography>
      </AtomGrid>
      <AtomGrid item>
        <AtomImageApp alt="android" src="/images/android.png" />
      </AtomGrid>
      <AtomGrid item>
        <AtomImageApp alt="android" src="/images/ios.png" />
      </AtomGrid>
    </AtomGrid>
  );
}

export default FooterApp
