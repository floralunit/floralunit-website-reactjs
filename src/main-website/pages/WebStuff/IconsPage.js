import "../../MainWebsite.css"
import {
  MAIN_BACKGROUND, WATER_BACKGROUND, WATER1_BACKGROUND, SUN_BACKGROUND, SKY_BACKGROUND, SKY1_BACKGROUND, TRIPPY_BACKGROUND, TRIPP2_BACKGROUND, EMO_BACKGROUND, EMO1_BACKGROUND, EMO2_BACKGROUND, SEXY_BACKGROUND, CLOUD_BACKGROUND, CLOUD1_BACKGROUND, MARBLE_BACKGROUND, MARBLE1_BACKGROUND, PINK_BACKGROUND, WHITE_BACKGROUND, FLOWER_BACKGROUND, FLOWER1_BACKGROUND, FLOWER2_BACKGROUND, FLOWER3_BACKGROUND, SKULL_BACKGROUND, RED_BACKGROUND, COPPER_BACKGROUND, HINDU_BACKGROUND, HINDU1_BACKGROUND, CLOTH_BACKGROUND, BLUEDOTS_BACKGROUND, ROSES_BACKGROUND, GREEN_BACKGROUND, LEAVE_BACKGROUND, MEIMAID_SEA_BACKGROUND, STARDEWVALLEY_BACKGROUND, BUBBLES_BACKGROUND, BUBBLES2_BACKGROUND, DAISY_BACKGROUND, BEARS_BACKGROUND, PINKCLOUDS_BACKGROUND, DARKGRASS_BACKGROUND, FROG_BACKGROUND, CUTE_BLUE_BACKGROUND, CUTE_BLUE2_BACKGROUND, CUTE_PINK_BACKGROUND,
  WATER2_BACKGROUND, FLOWER4_BACKGROUND, FLOWER5_BACKGROUND, FLOWER6_BACKGROUND, ABSTRACT_BACKGROUND, ABSTRACT1_BACKGROUND, ABSTRACT2_BACKGROUND, ABSTRACT3_BACKGROUND, ABSTRACT4_BACKGROUND, ABSTRACT5_BACKGROUND, ABSTRACT6_BACKGROUND, ANGEL_BACKGROUND, BUBBLES3_BACKGROUND, DOLPHIN_BACKGROUND, KOSMOS_BACKGROUND, DARK_BACKGROUND, FLOWER7_BACKGROUND, PIG_BACKGROUND, RABBIT_BACKGROUND, CD_BACKGROUND, FLY_BACKGROUND, ABSTRACT7_BACKGROUND, ABSTRACT8_BACKGROUND, SHINE_BACKGROUND
} from '../../../global-const';
import { CompactPicker } from 'react-color';
import React, { useEffect, useState } from 'react'

export function IconsPage() {
  document.documentElement.style.removeProperty('--box-header-color');
  document.documentElement.style.removeProperty('--main-background');
  document.documentElement.style.removeProperty('--box-background');
  document.documentElement.style.removeProperty('--box-text-color');

  const bgs = [
    SUN_BACKGROUND,
    WHITE_BACKGROUND,
    EMO1_BACKGROUND,
    MARBLE_BACKGROUND,
    CLOUD_BACKGROUND,
    CD_BACKGROUND,
    ABSTRACT6_BACKGROUND,
    DOLPHIN_BACKGROUND,
    CUTE_BLUE_BACKGROUND,
    CUTE_BLUE2_BACKGROUND,
    SKY_BACKGROUND,
    SKY1_BACKGROUND,
    RABBIT_BACKGROUND,
    WATER_BACKGROUND,
    BUBBLES3_BACKGROUND,
    WATER2_BACKGROUND,
    WATER1_BACKGROUND,
    CLOUD1_BACKGROUND,
    CUTE_PINK_BACKGROUND,
    PIG_BACKGROUND,
    FLOWER_BACKGROUND,
    PINK_BACKGROUND,
    ANGEL_BACKGROUND,
    FLOWER5_BACKGROUND,
    ROSES_BACKGROUND,
    FLOWER6_BACKGROUND,
    PINKCLOUDS_BACKGROUND,
    FLOWER7_BACKGROUND,
    FLOWER4_BACKGROUND,
    FLOWER1_BACKGROUND,
    FLOWER2_BACKGROUND,
    HINDU_BACKGROUND,
    LEAVE_BACKGROUND,
    HINDU1_BACKGROUND,
    CLOTH_BACKGROUND,
    GREEN_BACKGROUND,
    MAIN_BACKGROUND,
    DAISY_BACKGROUND,
    DARKGRASS_BACKGROUND,
    FROG_BACKGROUND,
    STARDEWVALLEY_BACKGROUND,
    MEIMAID_SEA_BACKGROUND,
    ABSTRACT4_BACKGROUND,
    FLOWER3_BACKGROUND,
    RED_BACKGROUND,
    EMO2_BACKGROUND,
    COPPER_BACKGROUND,
    BEARS_BACKGROUND,
    ABSTRACT_BACKGROUND,
    TRIPP2_BACKGROUND,
    ABSTRACT2_BACKGROUND,
    BLUEDOTS_BACKGROUND,
    BUBBLES_BACKGROUND,
    ABSTRACT3_BACKGROUND,
    TRIPPY_BACKGROUND,
    ABSTRACT1_BACKGROUND,
    EMO_BACKGROUND,
    ABSTRACT7_BACKGROUND,
    SEXY_BACKGROUND,
    BUBBLES2_BACKGROUND,
    ABSTRACT5_BACKGROUND,
    FLY_BACKGROUND,
    MARBLE1_BACKGROUND,
    SKULL_BACKGROUND,
    KOSMOS_BACKGROUND,
    DARK_BACKGROUND,
    ABSTRACT8_BACKGROUND,
    SHINE_BACKGROUND
  ];

  const changeBackground = (imagePath) => {
    document.documentElement.style.setProperty('--main-background', `url(${imagePath}) `);
  };

  const changeBoxBackground = (color) => {
    document.documentElement.style.setProperty('--box-background', `${color.hex}`);
  };
  const changeBoxHeaderColor = (color) => {
    document.documentElement.style.setProperty('--box-header-color', `${color.hex}`);
  };

  return (
    <div className='main' style={{ maxWidth: "800px" }}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div className="box">
          <h3>Change box color</h3>
          <div className="inner">
            <CompactPicker onChangeComplete={changeBoxBackground} />
          </div>
        </div>
        <div className="box">
          <h3>Change box header color</h3>
          <div className="inner">
            <CompactPicker onChangeComplete={changeBoxHeaderColor} />
          </div>
        </div>
      </div>

      <div className="box08">
        <div className="box-top">
          <div className="u01"></div>
        </div>
        <div className="box-center">
          <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
            Hover on bg to preview
            <div className="inner">
              <div className="bgs">
                {bgs.map((image, index) => (
                  <img key={index} src={image} onMouseEnter={() => changeBackground(image)} />))}
              </div>
            </div>
          </div>
        </div>
        <div className="box-bottom">
          <div className="s01"></div>
        </div>
      </div>

      <div className="box08">
        <div className="box-top">
          <div className="u01"></div>
        </div>
        <div className="box-center">
          <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
            Pixels I founds
            <div style={{ fontSize: '0.6em' }}>
              click to open the source
            </div>
            <div className="inner">
              <div className="icons" style={{ justifyContent: 'left' }}>
                <a><img src={require("../../resources/pixels/8OiOqRY.gif")} /></a>
                <a><img src={require("../../resources/pixels/398Yet2.gif")} /></a>
                <a><img src={require("../../resources/pixels/rYgMZnK.gif")} /></a>
                <a><img src={require("../../resources/pixels/wXsrEGT.gif")} /></a>
                <a><img src={require("../../resources/pixels/zJZuQV8.gif")} /></a>
                <a><img src={require("../../resources/pixels/whv7P5w.gif")} /></a>
                <a><img src={require("../../resources/pixels/jZvzhTA.gif")} /></a>
                <a><img src={require("../../resources/pixels/AedbD8l.gif")} /></a>
                <a><img src={require("../../resources/pixels/D13NasZ.gif")} /></a>
                <a><img src={require("../../resources/pixels/ALAAFn1.gif")} /></a>
                <a><img src={require("../../resources/pixels/mGQoCfM.gif")} /></a>
                <a><img src={require("../../resources/pixels/q8z6JxI.gif")} /></a>
                <a href="https://artwork.neocities.org/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/yum-soot.gif")} /></a>
                <a><img src={require("../../resources/pixels/cj2PLXc.gif")} /></a>
                <a><img src={require("../../resources/pixels/music.gif")} /></a>
                <a><img src={require("../../resources/pixels/4pAzup9.gif")} /></a>
                <a><img src={require("../../resources/pixels/tEJ5Dt8.gif")} /></a>
                <a><img src={require("../../resources/pixels/vOv0Dsf.gif")} /></a>
                <a><img src={require("../../resources/pixels/matryoshka.gif")} /></a>
                <a><img src={require("../../resources/pixels/sANi3Ri.gif")} /></a>
                <a><img src={require("../../resources/pixels/cloud.gif")} /></a>
                <a><img src={require("../../resources/pixels/cry.gif")} /></a>
                <a><img src={require("../../resources/pixels/normal.gif")} /></a>
                <a><img src={require("../../resources/pixels/left_right.gif")} /></a>
                <a><img src={require("../../resources/pixels/kaoani-cat18.gif")} /></a>
                <a><img src={require("../../resources/pixels/blobshades.gif")} /></a>
                <a><img src={require("../../resources/pixels/puff_froggy.gif")} /></a>
                <a><img src={require("../../resources/pixels/blobspin.gif")} /></a>
                <a href="https://www.lejlart.com/apple.html" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/pixelplant1anim.gif")} /></a>
                <a href="https://www.lejlart.com/apple.html" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/pixelplant2anim.gif")} /></a>
                <a href="https://www.lejlart.com/apple.html" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/pixelplant3anim.gif")} /></a>
                <a href="https://www.lejlart.com/apple.html" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/lacroixdaisy.gif")} /></a>
                <a href="https://www.lejlart.com/apple.html" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/skellygreen.gif")} /></a>
                <a href="https://www.lejlart.com/apple.html" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/bowterfleye.gif")} /></a>
                <a><img src={require("../../resources/pixels/tumblr_inline_ml15w1FyIN1qz4rgp.gif")} /></a>
                <a href="https://foollovers.com/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/a03-flower-dandelion.gif")} /></a>
                <a href="https://foollovers.com/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/a06-icon-girl.gif")} /></a>
                <a href="https://foollovers.com/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/x02-icon-bee.gif")} /></a>
                <a href="https://foollovers.com/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/x06-icon-bee.gif")} /></a>
                <a href="https://foollovers.com/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/b06-icon-frog.gif")} /></a>
                <a href="https://foollovers.com/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/b15-icon-rabbit.gif")} /></a>
                <a href="https://foollovers.com/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/c07-flower-cherry_blossom.gif")} /></a>
                <a><img src={require("../../resources/pixels/willothewisp01.gif")} /></a>
                <a><img src={require("../../resources/pixels/wings.gif")} /></a>
                <a><img src={require("../../resources/pixels/casette-1.png")} /></a>
                <a><img src={require("../../resources/pixels/snapa3.gif")} /></a>
                <a><img src={require("../../resources/pixels/tape_pastel.gif")} /></a>
                <a><img src={require("../../resources/pixels/tv_16.gif")} /></a>
                <a><img src={require("../../resources/pixels/PVHECEE.png")} /></a>
                <a href="https://dollarchive.neocities.org/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/3spanishmoon_sm.png")} /></a>
                <a><img src={require("../../resources/pixels/windows.gif")} /></a>
                <a><img src={require("../../resources/pixels/1dfntQp.gif")} /></a>
                <a><img src={require("../../resources/pixels/Camera.gif")} /></a>
                <a><img src={require("../../resources/pixels/cdrom.gif")} /></a>
                <a><img src={require("../../resources/pixels/Frog_Croaking.gif")} /></a>
              </div>
              <div className="big-icons">
                <a href="https://omfg.neocities.org/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/venusdemilo.gif")} /></a>
                <a><img src={require("../../resources/pixels/eXgnvmo.png")} /></a>
                <a><img src={require("../../resources/pixels/dancing-moomin-lostletters.png")} /></a>
                <a><img src={require("../../resources/pixels/aZuN0R9.png")} /></a>
                <a href="https://foollovers.com/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/ee03-icon-cat.gif")} /></a>
                <a href="https://foollovers.com/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/eg03-icon-cat.gif")} /></a>
                <a href="https://foollovers.com/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/f02-icon-girl.gif")} /></a>
                <a href="https://artwork.neocities.org/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/artworkteatotoro.gif")} /></a>
                <a href="https://artwork.neocities.org/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/totoroblink.gif")} /></a>
                <a href="https://artwork.neocities.org/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/totorogroup.gif")} /></a>
                <a href="https://omfg.neocities.org/" target="_blank" rel="noreferrer"><img src={require("../../resources/pixels/bbirth77.gif")} /></a>
                <a><img src={require("../../resources/pixels/d25reoy-de4aac38-121c-44cb-acb3-384213496894.gif")} /></a>
                <a><img src={require("../../resources/pixels/kirby-dancing.gif")} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="box-bottom">
          <div className="s01"></div>
        </div>
      </div>

    </div>
  );
}
