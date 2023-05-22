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
import HospitalRoom1Image from 'src/assets/images/Slide1_hospital_room_1.png';
import Menu3Image from 'src/assets/images/Slide1_menu_3.png';
import LaptopScreen1Image from 'src/assets/images/Slide1_laptop_screen_1.png';
import Rectangle19Image from 'src/assets/images/Slide1_Rectangle_19.png';
import Image5Image from 'src/assets/images/Slide1_image_5.png';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import TextBoxTransparentBaImage from 'src/assets/images/Slide1_text_box_Transparent_Background_1.png';

const Slide11 = styled('div')({
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
  top: `-8px`,
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
  left: `266px`,
  top: `264px`,
});

const Rectangle15 = styled('div')({
  backgroundColor: `rgba(0, 135, 46, 1)`,
  width: `842px`,
  height: `451px`,
  position: `absolute`,
  left: `276px`,
  top: `277px`,
});

const FloppyBird = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Goldman`,
  fontWeight: `700`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `564px`,
  top: `332px`,
});

const Rectangle19 = styled('img')({
  height: `51px`,
  width: `292px`,
  position: `absolute`,
  left: `551px`,
  top: `634px`,
  cursor: 'pointer',
});

const Download = styled('div')({
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
  left: `620px`,
  top: `642px`,
  cursor: 'pointer',
});

const Frame2 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `100px`,
  height: `100px`,
  left: `658px`,
  top: `323px`,
  overflow: `hidden`,
});

const Image5 = styled('img')({
  height: `204px`,
  width: `204px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `586px`,
  top: `400px`,
});

const TextBoxTransparentBa = styled('div')({
  backgroundImage: `url(${TextBoxTransparentBaImage})`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  width: `440px`,
  height: `380px`,
  position: `absolute`,
  left: `770px`,
  top: `0px`,
});

const IVeBeenWaitingOnHerT = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Goldman`,
  fontWeight: `700`,
  fontSize: `28.148147583007812px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `378px`,
  height: `196px`,
  position: `absolute`,
  left: `820px`,
  top: `34px`,
});

function Slide1(props) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/slide2');
  };
  return (
    <Slide11 className={props.className}>
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
      <Rectangle15></Rectangle15>
      <FloppyBird>{`FLOPPY BIRD`}</FloppyBird>
      <Rectangle19 src={Rectangle19Image} onClick={handleButtonClick} loading="lazy" alt={'Rectangle 19'} />
      <Download onClick={handleButtonClick}>{`DOWNLOAD`}</Download>
      <Frame2></Frame2>
      <Image5 src={Image5Image} loading="lazy" alt={'image 5'} />
      <TextBoxTransparentBa></TextBoxTransparentBa>
      <IVeBeenWaitingOnHerT>
        {`I’ve been waiting 
on her to finish her surgery 
for hours..
I’ll download that 
game everyone plays!`}
      </IVeBeenWaitingOnHerT>
    </Slide11>
  );
}

export default Slide1;