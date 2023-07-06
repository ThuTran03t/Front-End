import React from 'react'

import { useParams } from 'react-router-dom'

import Header from '../Home/Header'

import SingleBanner from '../Banners/SingleBanner'
import UserSidebar from '../UserProfile/UserSliderbar'
import AccountSettings from '../UserProfile/AccountSettings'
import ChangePassword from '../UserProfile/ChangePassword'
import SingleBanner from '../Banners/SingleBanner'

import './UserProfile.css'
import AccountSettings from '../UserProfile/AccountSettings'
const UserProfile = () => {
  const {activepage} = useParams ()

  return (
    
    <div className='userprofile'>
    <Header/>
    <SingleBanner 
    heading={`My Profile`}
    bannerimage = 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' 
    />
    {/* UserProfile , showing {activepage}
     */}

     <div className='userprofilein'>
        <div className='left'>
          <UserSidebar activepage={activepage}/>
        </div>
        <div className='right'>
          {activepage === 'accountsettings' && <AccountSettings/>}
          {activepage === 'changepassword' && <ChangePassword/>}
          {activepage === 'yourorders' && <YourOrders/>}
          {activepage === 'address' && <UserAddress/>}
          {activepage === 'legalnotice' && <LegalNotice/>}
        </div>
     </div>
 
    </div>
  )
}

export default UserProfile