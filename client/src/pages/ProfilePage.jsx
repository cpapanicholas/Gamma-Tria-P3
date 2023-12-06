import { useState } from 'react';
import ProfileHeader from "../components/ProfileHeader";
import ProfileSectionToggle from '../components/ProfileSectionToggle'
import MyPosts from '../components/MyPosts';
import MyProgress from '../components/MyProgress';
import MyFriends from '../components/MyFriends';
import Footer from '../components/Footer/index'


export default function MyProfilePage () {
  const profileSections = ['feed', 'progress', 'friends']
  const [profileSection, setProfileSection] = useState('feed');

  return (
    <div className='bg-light'>
      <ProfileHeader/>
      <ProfileSectionToggle setProfileSection={setProfileSection} profileSections={profileSections} activeSection={profileSection}/>
      {profileSection === profileSections[0] ? <MyPosts/> : profileSection === profileSections[1] ? <MyProgress/> : profileSection === profileSections[2] ? <MyFriends/> : ''}
      <Footer/>
    </div>
  );
};