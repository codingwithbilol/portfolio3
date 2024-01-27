import React from 'react'
import "../second_home/second_home.css"

export default function Second_home() {
  return (
    <div>
      <button className='btn'>
    <div className='arrow'>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
  <rect width="16" height="2" rx="1" transform="matrix(-1 0 0 1 16 0)" fill="white"/>
  <rect width="20" height="2" rx="1" transform="matrix(-1 0 0 1 20 7)" fill="white"/>
  <rect width="16" height="2" rx="1" transform="matrix(-1 0 0 1 16 14)" fill="white"/>
</svg>
</div>
</button>
<div className='katalog_menu'>
<p className='catalog_button'>Каталог</p>

<input type='text' className='i' placeholder='Search'/>
<div className='search_icon'></div>
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <path d="M25.1944 23.7582L20.8977 19.5573V19.5573L20.797 19.4041C20.6097 19.2177 20.3537 19.1127 20.0865 19.1127C19.8192 19.1127 19.5632 19.2177 19.3759 19.4041V19.4041C15.7244 22.7542 10.0977 22.9363 6.22751 19.8296C2.35733 16.723 1.44459 11.2917 4.09461 7.13771C6.74463 2.98371 12.1351 1.39606 16.6911 3.42767C21.247 5.45928 23.5548 10.4797 22.0838 15.1595C21.9778 15.4976 22.0644 15.8652 22.3109 16.124C22.5574 16.3827 22.9264 16.4932 23.2788 16.4139C23.6312 16.3345 23.9136 16.0774 24.0195 15.7393V15.7393C25.778 10.1858 23.1222 4.20944 17.7701 1.67632C12.4181 -0.856798 5.97605 0.81353 2.61132 5.60677C-0.753412 10.4 -0.0310261 16.8777 4.31116 20.8494C8.65335 24.8211 15.3122 25.0949 19.9802 21.4936L23.7846 25.2131C24.1775 25.5956 24.8127 25.5956 25.2056 25.2131C25.5981 24.8253 25.5981 24.2007 25.2056 23.8129V23.8129L25.1944 23.7582Z" fill="white"/>
</svg>
</div>

    </div>
  )
}