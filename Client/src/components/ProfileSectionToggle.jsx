export default function ProfileSectionToggle ({ setProfileSection, profileSections}) {


  return (
    <div className="d-flex">
      <button onClick={() => setProfileSection(profileSections[0])}>feed</button>
      <button onClick={() => setProfileSection(profileSections[1])}>progress</button>
      <button onClick={() => setProfileSection(profileSections[2])}>friends</button>
    </div>
  );
}