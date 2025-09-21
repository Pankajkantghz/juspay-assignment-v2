import { useState } from "react";

// Icons
import DefaultIcon from "../assets/icons/default.svg";
import EcommerceIcon from "../assets/icons/ecommerce.svg";
import ProjectsIcon from "../assets/icons/projects.svg";
import OnlineCoursesIcon from "../assets/icons/bookmarks.svg";
import UserProfileIcon from "../assets/icons/userprofile.svg";
import AccountIcon from "../assets/icons/account.svg";
import CorporateIcon from "../assets/icons/corporate.svg";
import BlogIcon from "../assets/icons/blog.svg";
import SocialIcon from "../assets/icons/social.svg";
import ByeWindLogo from "../assets/icons/ByeWind.svg";
import DropdownClosed from "../assets/icons/dropdown.svg";
import DropdownOpen from "../assets/icons/dropdownopen.svg";

export default function Sidebar({ onChange }) {
  const [active, setActive] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const rowBase =
    "flex items-center gap-[0.5rem] h-[1.75rem] pr-[0.5rem] cursor-pointer select-none rounded";

  const select = (id) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <aside
  className="w-[13.25rem] h-screen shrink-0 pt-[1.25rem] pb-[1.25rem] px-[1rem] 
             flex flex-col gap-[1rem] 
             bg-white dark:bg-black 
             border-r border-black/10 dark:border-gray-700 
             text-[0.8125rem] leading-[1.375rem]"
>
      {/* Brand */}
      <div className="w-[11.25rem] h-[2rem] flex items-center gap-[0.5rem] rounded-lg">
        <img
          src={ByeWindLogo}
          alt="ByeWind"
          className="h-[1.5rem] w-[1.5rem] dark:invert dark:brightness-200"
        />
        <span className="text-sm text-black dark:text-gray-200">ByeWind</span>
      </div>

      <TabRow />

      <FavoritesSection active={active} rowBase={rowBase} onClick={select} />
      <DashboardsSection
        active={active}
        rowBase={rowBase}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        onClick={select}
      />
      <PagesSection
        active={active}
        rowBase={rowBase}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        onClick={select}
      />
    </aside>
  );
}

/* ───────── Tabs ───────── */
function TabRow() {
  const [tab, setTab] = useState("fav");
  return (
    <div className="w-[11.25rem] flex gap-[1rem] text-sm">
      {["fav", "rec"].map((t) => (
        <button
          key={t}
          onClick={() => setTab(t)}
          className={
            tab === t
              ? "text-black dark:text-gray-200 font-medium"
              : "text-gray-500 dark:text-gray-400"
          }
        >
          {t === "fav" ? "Favorites" : "Recently"}
        </button>
      ))}
    </div>
  );
}

/* ───────── Favorites ───────── */
function FavoritesSection({ active, rowBase, onClick }) {
  const rows = [
    { id: "fav-overview", label: "Overview" },
    { id: "fav-projects", label: "Projects" },
  ];
  return (
    <div className="flex flex-col gap-[0.25rem] pb-[0.75rem]">
      {rows.map((r) => (
        <NavRow
          key={r.id}
          rowBase={rowBase}
          active={active === r.id}
          onClick={() => onClick(r.id)}
        >
          <span className="h-[0.375rem] w-[0.375rem] rounded-full bg-gray-400" />
          {r.label}
        </NavRow>
      ))}
    </div>
  );
}

/* ───────── Dashboard Section ───────── */
function DashboardsSection({ active, rowBase, onClick, openMenu, setOpenMenu }) {
  const rows = [
    { id: "db-default", icon: DefaultIcon, label: "Default" },
    { id: "db-commerce", icon: EcommerceIcon, label: "eCommerce", dropdown: true },
    { id: "db-projects", icon: ProjectsIcon, label: "Projects", dropdown: true },
    { id: "db-courses", icon: OnlineCoursesIcon, label: "Online Courses", dropdown: true },
  ];
  return (
    <div className="flex flex-col gap-[0.25rem] pb-[0.75rem]">
      <Heading>Dashboards</Heading>
      {rows.map((r) => (
        <NavRow
          key={r.id}
          rowBase={rowBase}
          active={active === r.id}
          onClick={() => {
            if (r.dropdown) setOpenMenu(openMenu === r.id ? null : r.id);
            onClick(r.id);
          }}
        >
          {r.dropdown && (
            <img
              src={openMenu === r.id ? DropdownOpen : DropdownClosed}
              className="h-[1rem] w-[1rem] dark:invert dark:brightness-200"
              alt="dropdown"
            />
          )}
          <img
            src={r.icon}
            className="h-[1rem] w-[1rem] dark:invert dark:brightness-200"
            alt=""
          />
          {r.label}
        </NavRow>
      ))}
    </div>
  );
}

/* ───────── Pages Section ───────── */
function PagesSection({ active, rowBase, onClick, openMenu, setOpenMenu }) {
  const rows = [
    { id: "account", icon: AccountIcon, label: "Account", dropdown: true },
    { id: "corporate", icon: CorporateIcon, label: "Corporate", dropdown: true },
    { id: "blog", icon: BlogIcon, label: "Blog", dropdown: true },
    { id: "social", icon: SocialIcon, label: "Social", dropdown: true },
  ];
  return (
    <div className="flex flex-col gap-[0.25rem] pb-[0.75rem]">
      <Heading>Pages</Heading>
      {/* User Profile dropdown */}
      <NavRow
        rowBase={rowBase}
        active={active === "user" || (active && active.startsWith("up-"))}
        onClick={() => {
          setOpenMenu(openMenu === "user" ? null : "user");
          onClick("user");
        }}
      >
        <img
          src={openMenu === "user" ? DropdownOpen : DropdownClosed}
          className="h-[1rem] w-[1rem] dark:invert dark:brightness-200"
          alt="dropdown"
        />
        <img
          src={UserProfileIcon}
          className="h-[1rem] w-[1rem] dark:invert dark:brightness-200"
          alt=""
        />
        User Profile
      </NavRow>
      {openMenu === "user" && (
        <div className="pl-[1.5rem] flex flex-col gap-[0.25rem]">
          {["Overview", "Projects", "Campaigns", "Documents", "Followers"].map(
            (s) => {
              const id = `up-${s.toLowerCase()}`;
              return (
                <div
                  key={id}
                  onClick={() => onClick(id)}
                  className="cursor-pointer flex items-center gap-[0.5rem] h-[1.5rem] text-black dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-100"
                >
                  <span className="h-[0.375rem] w-[0.375rem] rounded-full bg-gray-400"></span>
                  {s}
                </div>
              );
            }
          )}
        </div>
      )}
      {rows.map((r) => (
        <NavRow
          key={r.id}
          rowBase={rowBase}
          active={active === r.id}
          onClick={() => {
            if (r.dropdown) setOpenMenu(openMenu === r.id ? null : r.id);
            onClick(r.id);
          }}
        >
          {r.dropdown && (
            <img
              src={openMenu === r.id ? DropdownOpen : DropdownClosed}
              className="h-[1rem] w-[1rem] dark:invert dark:brightness-200"
              alt="dropdown"
            />
          )}
          <img
            src={r.icon}
            className="h-[1rem] w-[1rem] dark:invert dark:brightness-200"
            alt=""
          />
          {r.label}
        </NavRow>
      ))}
    </div>
  );
}

/* ───────── Helpers ───────── */
function Heading({ children }) {
  return (
    <h4 className="uppercase text-[0.6875rem] text-gray-500 dark:text-gray-400 mb-[0.25rem]">
      {children}
    </h4>
  );
}

function NavRow({ children, rowBase, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
      ${rowBase}
      ${
        active
          ? "font-semibold text-black dark:text-gray-100 bg-gray-100 dark:bg-gray-800 relative"
          : "text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
      }`}
    >
      {active && (
        <span className="absolute left-0 top-0 bottom-0 w-[0.25rem] bg-black dark:bg-white rounded-r"></span>
      )}
      <div className="pl-[0.75rem] flex items-center gap-[0.5rem] flex-1">
        {children}
      </div>
    </div>
  );
}