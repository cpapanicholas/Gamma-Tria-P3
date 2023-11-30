import { useState } from 'react';
import ProfileHeader from "../components/ProfileHeader";
import ProfileSectionToggle from '../components/ProfileSectionToggle'
import MyPosts from '../components/MyPosts';
import MyProgress from '../components/MyProgress';
import MyFriends from '../components/MyFriends';

export default function MyProfilePage () {
  const profileSections = ['feed', 'progress', 'friends']
  const [profileSection, setProfileSection] = useState('feed');

  return (
    <>
      <ProfileHeader/>
      <ProfileSectionToggle setProfileSection={setProfileSection} profileSections={profileSections}/>
      {profileSection === profileSections[0] ? <MyPosts/> : profileSection === profileSections[1] ? <MyProgress/> : profileSection === profileSections[2] ? <MyFriends/> : ''}
    </>
  );
};