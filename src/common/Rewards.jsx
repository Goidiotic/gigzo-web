import React from 'react'
import '../css/Global.css'
import rewardBadge from '../icons/Badge.png'

export default function Rewards({sellRewards, buyRewards}) {
  return (
    <div className='mainRewardCompContainer'>
        <div className='mainRewardCompBadgeContainer'>
            <div className='mainRewardCompBadge'>
                <img className='mainRewardCompBadgeIcon' src={rewardBadge} alt="Reward Badge" />
            </div>
            <div className='mainRewardCompContent'>
                <div className='text-color-primary font-size-16 font-weight-600'>{buyRewards}</div>
                <div className='text-color-secondary font-size-16 font-weight-600'>{sellRewards}</div>
            </div>
        </div>
        <div>Instant credit to your wallet.</div>
    </div>
  )
}
