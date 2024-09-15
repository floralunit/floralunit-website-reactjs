import { ANGEL_BACKGROUND, CLOTH_BACKGROUND, MARBLE1_BACKGROUND } from "../../../global-const";
import "../../MainWebsite.css"

import React, { useEffect, useState } from 'react'

export function VideosPage() {
  document.documentElement.style.removeProperty('--box-text-color');
  document.documentElement.style.removeProperty('--main-cursor');
  document.documentElement.style.removeProperty('--pointer-cursor');
  document.documentElement.style.setProperty('--box-header-color', `#3d2b1f`);
  document.documentElement.style.setProperty('--main-background', `url(${ANGEL_BACKGROUND})`);
  document.documentElement.style.setProperty('--box-background', `url(${CLOTH_BACKGROUND})`);
  return (
    <div className='main' style={{ maxWidth: "700px", fontSize: 'smaller' }}>
      <div className="box08">
        <div className="box-top">
          <div className="u01"></div>
        </div>
        <div className="box-center">
          <div className="box-inner" style={{ textAlign: 'center', fontFamily: 'LCD5', fontSize: '1.5em' }}>
            My video gallery
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={require('../../resources/tabs_dividers_pixels/zwlk1.gif')}
                style={{ height: '40px', width: 'auto', padding: '5px 0 0 0', alignSelf: 'center' }} />
            </div>
          </div>
        </div>
        <div className="box-bottom">
          <div className="s01"></div>
        </div>
      </div>
      <div className="box">
        <div className="inner">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239670" width="270" height="152" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239669" width="270" height="152" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239675" width="270" height="152" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239684" width="270" height="152" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239682" width="270" height="152" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239703" width="270" height="152" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239686" width="270" height="152" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239685" width="270" height="152" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239691" width="270" height="152" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239704" width="270" height="152" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239705" width="270" height="152" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239683&hd=2" width="265" height="540" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239681&hd=2" width="265" height="540" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>

          </div>

          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239712&hd=2" width="265" height="540" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239692" width="265" height="540" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239711&hd=2" width="265" height="540" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239710&hd=2" width="265" height="540" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239709&hd=2" width="265" height="540" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239708&hd=2" width="265" height="540" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>

    </div>
  );
}
