export default function ProfileSectionToggle ({ setProfileSection, profileSections}) {


  return (
    <div className="toggle-container px-4">
      <button onClick={() => setProfileSection(profileSections[0])}>feed</button>
      <button onClick={() => setProfileSection(profileSections[1])}>progress</button>
      <button onClick={() => setProfileSection(profileSections[2])}>friends</button>
    </div>
  );
}