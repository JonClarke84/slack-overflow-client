import {DiRuby, DiJsBadge, DiReact, DiCss3, DiCssdeck, DiCssTricks} from "react-icons/di";
import {BsCode} from "react-icons/bs"; 
import {SiTailwindcss} from "react-icons/si";
import React, { useState } from 'react'

const SideBar = ({ changeRoom }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16
                    flex flex-col
                    bg-gray-800 text-white shadow-lg">
        <SideBarIcon icon={<BsCode size="28" />} name="General" id="General" roomChange={changeRoom} />
        <Divider />
        <SideBarIcon icon={<DiRuby size="28" />} name="Ruby" id="Ruby" roomChange={changeRoom} />
        <Divider />
        <SideBarIcon icon={<DiJsBadge size="24" />} name="JavaScript" id="Javascript" roomChange={changeRoom} />
        <SideBarIcon icon={<DiReact size="28" />} name="React" id="React" roomChange={changeRoom} />
        <Divider />
        <SideBarIcon icon={<DiCss3 size="24" />} name="CSS" id="CSS" roomChange={changeRoom} />
        <SideBarIcon icon={<DiCssdeck size="24" />} name="CSS Deck" id="CSS-Deck" roomChange={changeRoom} />
        <SideBarIcon icon={<SiTailwindcss size="22" />} name="Tailwind" id="Tailwind" roomChange={changeRoom} />
    </div>
  )
}


const SideBarIcon = ({ icon, name, roomChange }) => {

  function giveRoomName(txt) {
    roomChange(txt)
  }
  return (
    <div className="sidebar-icon group">
      <button onClick={() => giveRoomName(name)}>{icon}</button>
      <span className="sidebar-tooltip group-hover:scale-100 group-hover:text-white">
      {name}
      </span>
    </div>
  );
}

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
