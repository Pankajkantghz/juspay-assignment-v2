import ToggleIcon from "../assets/icons/toggle.svg";
import ThemeIcon from "../assets/icons/theme.svg";
import BookmarksIcon from "../assets/icons/bookmarks.svg";
import RefreshIcon from "../assets/icons/refresh.svg";
import NotificationIcon from "../assets/icons/notification.svg";
import SearchBarRight from "../assets/icons/searchbarright.svg";
import { Link } from "react-router-dom";

export default function TopBar({ onToggleLeft, onToggleRight, onToggleTheme, theme }) {
  return (
    <header className="w-full border-b border-black/10 bg-white text-black dark:bg-black dark:text-white">
      <div className="flex justify-between items-center h-[4.25rem] px-[1.75rem] py-[1.25rem]">
        
        {/* LEFT SECTION */}
        <div className="flex items-center space-x-[1rem] text-gray-600 dark:text-white">
          <button
            onClick={onToggleLeft}
            className="w-[1.75rem] h-[1.75rem] flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <img
              src={ToggleIcon}
              alt="toggle-left"
              className="w-[1.25rem] h-[1.25rem] dark:invert dark:brightness-200"
            />
          </button>

          {/* Breadcrumbs */}
          <div className="flex items-center space-x-[0.5rem]">
            <img
              src={NotificationIcon}
              alt="star"
              className="w-[1.25rem] h-[1.25rem] dark:invert dark:brightness-200"
            />
            <Link 
              to="/dashboard" 
              className="text-gray-400 font-medium dark:text-gray-400 hover:underline"
            >
              Dashboard
            </Link>
            <span className="text-gray-400">/</span>
            <Link 
              to="/" 
              className="text-black font-medium dark:text-gray-200 hover:underline"
            >
              Default
            </Link>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-[1.25rem] h-[1.75rem]">
          
          {/* Search Box */}
          <div className="relative w-[10rem] h-[1.75rem] flex items-center rounded-md bg-black/5 dark:bg-white/10 px-[0.5rem] py-[0.25rem]">
            <svg
              className="absolute left-[0.5rem] w-[1rem] h-[1rem] text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7 7 0 1110.3 4.35a7 7 0 016.35 12.3z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="pl-[1.75rem] pr-[1.75rem] w-full h-full bg-transparent text-sm text-gray-600 dark:text-gray-200 placeholder-gray-400 focus:outline-none"
            />
            <img
              src={SearchBarRight}
              alt="search-right"
              className="absolute right-[0.5rem] w-[1rem] h-[1rem] text-gray-400 dark:invert dark:brightness-200"
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="w-[1.75rem] h-[1.75rem] flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <img
              src={ThemeIcon}
              alt="toggle-theme"
              className="w-[1.25rem] h-[1.25rem] dark:invert dark:brightness-200"
            />
          </button>

          {/* Other Icons */}
          <button className="w-[1.75rem] h-[1.75rem] flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <img
              src={RefreshIcon}
              alt="refresh"
              className="w-[1.25rem] h-[1.25rem] dark:invert dark:brightness-200"
            />
          </button>

          <button className="w-[1.75rem] h-[1.75rem] flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <img
              src={NotificationIcon}
              alt="notification"
              className="w-[1.25rem] h-[1.25rem] dark:invert dark:brightness-200"
            />
          </button>

          <button className="w-[1.75rem] h-[1.75rem] flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <img
              src={BookmarksIcon}
              alt="bookmarks"
              className="w-[1.25rem] h-[1.25rem] dark:invert dark:brightness-200"
            />
          </button>

          <button
            onClick={onToggleRight}
            className="w-[1.75rem] h-[1.75rem] flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <img
              src={ToggleIcon}
              alt="toggle-right"
              className="w-[1.25rem] h-[1.25rem] dark:invert dark:brightness-200"
            />
          </button>
        </div>
      </div>
    </header>
  );
}