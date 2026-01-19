import React from "react";
import "./SideBar.css";
import {
  MdHomeFilled,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineExplore,
} from "react-icons/md";
import { FaHistory, FaRegFlag } from "react-icons/fa";
import {
  SiYoutubekids,
  SiYoutubemusic,
  SiYoutubestudio,
  SiYoutubeshorts,
} from "react-icons/si";
import { IoMdSettings, IoMdHelpCircleOutline } from "react-icons/io";

import { CgPlayList } from "react-icons/cg";
import { MdOutlineWatchLater, MdOutlineFeedback } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { GoVideo } from "react-icons/go";
import { TfiDownload } from "react-icons/tfi";
import { IoLogoYoutube } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-item active">
          <MdHomeFilled size={22} />
          <span>Home</span>
        </div>
        <div className="sidebar-item links">
          <SiYoutubeshorts size={22} />
          <span>Shorts</span>
        </div>
        <div className="sidebar-item links">
          <MdSubscriptions size={22} />
          <span>Subscriptions</span>
        </div>
        <div className="sidebar-item links">
          <MdOutlineVideoLibrary size={22} />
          <span>Library</span>
        </div>

        <hr />
        <div className="sidebar-item links">
          <MdOutlineExplore size={22} />
          <span>Explore</span>
        </div>
        {/* <div className="sidebar-section"> */}

        <div className="sidebar-item links">
          <FaHistory size={20} />
          <span>History</span>
        </div>
        <div className="sidebar-item links">
          <CgPlayList size={22} />

          <span>Playlists</span>
        </div>
        <div className="sidebar-item links">
          <MdOutlineWatchLater size={22} />

          <span>Watch Later</span>
        </div>
        <div className="sidebar-item links">
          <AiOutlineLike size={22} />
          <span>Liked Video</span>
        </div>
        <div className="sidebar-item links">
          <GoVideo size={22} />
          <span>your Videos</span>
        </div>
        <div className="sidebar-item links">
          <TfiDownload size={22} />
          <span>Download</span>
        </div>
        <hr />

        <div className="sidebar-item links">
          <span>MORE FROM YOUTUBE</span>
        </div>
        <div className="sidebar-item  links">
          <IoLogoYoutube size={22} style={{ color: "red" }} />

          <span>YouTube Premium</span>
        </div>
        <div className="sidebar-item links">
          <SiYoutubekids size={22} style={{ color: "red" }} />
          <span>YouTube kids</span>
        </div>
        <div className="sidebar-item links">
          <SiYoutubestudio style={{ color: "red" }} size={22} />
          <span> YouTube studio</span>
        </div>
        <div className="sidebar-item links">
          <SiYoutubemusic style={{ color: "red" }} size={22} />

          <span>YouTube Music</span>
        </div>
        <hr />
        <div className="sidebar-item links">
          <IoMdSettings size={22} />

          <span>Settings</span>
        </div>
        <div className="sidebar-item links">
          <FaRegFlag size={22} />

          <span>Report History</span>
        </div>
        <div className="sidebar-item links">
          <IoMdHelpCircleOutline size={22} />

          <span>Help</span>
        </div>
        <div className="sidebar-item links">
          <MdOutlineFeedback size={22} />

          <span>Send Feedback</span>
        </div>
      </div>
     
    </div>
  );
}

export default Sidebar;
