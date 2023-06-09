/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import HospitalRoom1Image from 'src/assets/images/Slide6_hospital_room_1.png';
import Menu3Image from 'src/assets/images/Slide6_menu_3.png';
import LaptopScreen1Image from 'src/assets/images/Slide6_laptop_screen_1.png';
import Image4Image from 'src/assets/images/Slide6_image_4.png';
import { styled } from '@mui/material/styles';
import TextBoxTransparentBaImage from 'src/assets/images/Slide6_text_box_Transparent_Background_1.png';

const Slide61 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `1024px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const HospitalRoom1 = styled('img')({
  height: `1032px`,
  width: `1440px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Rectangle12 = styled('div')({
  backgroundColor: `rgba(0, 0, 0, 1)`,
  mixBlendMode: `lighten`,
  width: `197px`,
  height: `174px`,
  position: `absolute`,
  left: `1243px`,
  top: `0px`,
});

const Rectangle13 = styled('div')({
  backgroundColor: `rgba(0, 0, 0, 1)`,
  mixBlendMode: `lighten`,
  width: `197px`,
  height: `174px`,
  position: `absolute`,
  left: `1240px`,
  top: `0px`,
});

const Menu3 = styled('img')({
  height: `145px`,
  width: `146px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `1269px`,
  top: `3px`,
});

const Rectangle14 = styled('div')({
  width: `382px`,
  height: `220px`,
  position: `absolute`,
  left: `834px`,
  top: `12px`,
});

const LaptopScreen1 = styled('img')({
  height: `645px`,
  width: `860px`,
  position: `absolute`,
  left: `536px`,
  top: `266px`,
});

const Image4 = styled('img')({
  height: `448px`,
  width: `845px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `544px`,
  top: `280px`,
});

const Rectangle24 = styled('div')({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  width: `217px`,
  height: `61px`,
  position: `absolute`,
  left: `888px`,
  top: `641px`,
});

const Continue = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Courier Prime`,
  fontWeight: `400`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `919px`,
  top: `654px`,
});

const TextBoxTransparentBa = styled('div')({
  backgroundImage: `url(${TextBoxTransparentBaImage})`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  width: `355px`,
  height: `309px`,
  position: `absolute`,
  left: `59px`,
  top: `456px`,
});

const WowThisGameIsSoMuchF = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Goldman`,
  fontWeight: `700`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `103px`,
  top: `539px`,
});

function Slide6(props) {
  return (
    <Slide61 className={props.className}>
      <HospitalRoom1
        src={HospitalRoom1Image}
        loading="lazy"
        alt={'hospital room 1'}
      />
      <Rectangle12></Rectangle12>
      <Rectangle13></Rectangle13>
      <Menu3 src={Menu3Image} loading="lazy" alt={'menu 3'} />
      <Rectangle14></Rectangle14>
      <LaptopScreen1
        src={LaptopScreen1Image}
        loading="lazy"
        alt={'laptop screen 1'}
      />
      <Image4 src={Image4Image} loading="lazy" alt={'image 4'} />
      <Rectangle24></Rectangle24>
      <Continue>{`Continue`}</Continue>
      <TextBoxTransparentBa></TextBoxTransparentBa>
      <WowThisGameIsSoMuchF>
        {`Wow this game
is so much fun!`}
      </WowThisGameIsSoMuchF>
    </Slide61>
  );
}

export default Slide6;
