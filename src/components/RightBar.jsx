import BugIcon from "../assets/icons/bug.svg";
import HumanIcon from "../assets/icons/humanIcon.svg"
import RouterIcon from "../assets/icons/router.svg";

// Activities
import Activity1Icon from "../assets/icons/activity1.svg";
import Activity2Icon from "../assets/icons/activity2.svg";
import Activity3Icon from "../assets/icons/activity3.svg";
import Activity4Icon from "../assets/icons/activity4.svg";
import Activity5Icon from "../assets/icons/activity5.svg";

// Contacts
import NataliCraigIcon from "../assets/icons/natalicraig.svg";
import DrewCanoIcon from "../assets/icons/drewcano.svg";
import OrlandoDiggsIcon from "../assets/icons/orlandodiggs.svg";
import AndiLaneIcon from "../assets/icons/andilane.svg";
import KateMorrisionIcon from "../assets/icons/katemorrision.svg";
import KorayOkumusIcon from "../assets/icons/korayokumus.svg";

export default function RightBar() {
  const notifications = [
    { icon: BugIcon, text: "You have a bug that needs fixing…", time: "Just now" },
    { icon: HumanIcon, text: "New user registered", time: "59 minutes ago" },
    { icon: BugIcon, text: "You have a bug that needs fixing…", time: "12 hours ago" },
    { icon: RouterIcon, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
  ];

  const activities = [
    { icon: Activity1Icon, text: "You have a bug that needs fixing…", time: "Just now" },
    { icon: Activity2Icon, text: "Released a new version", time: "59 minutes ago" },
    { icon: Activity3Icon, text: "Submitted a bug", time: "12 hours ago" },
    { icon: Activity4Icon, text: "Modified A data in Page X", time: "Today, 11:59 AM" },
    { icon: Activity5Icon, text: "Deleted a page in Project X", time: "Feb 2, 2023" },
  ];

  const contacts = [
    { icon: NataliCraigIcon, name: "Natali Craig" },
    { icon: DrewCanoIcon, name: "Drew Cano" },
    { icon: OrlandoDiggsIcon, name: "Orlando Diggs" },
    { icon: AndiLaneIcon, name: "Andi Lane" },
    { icon: KateMorrisionIcon, name: "Kate Morrison" },
    { icon: KorayOkumusIcon, name: "Koray Okumus" },
  ];

  return (
    <aside className="w-[17.5rem] h-[75.375rem] border-l border-black/10 dark:border-gray-700 p-5 flex flex-col gap-8 bg-white dark:bg-black overflow-y-auto text-black dark:text-gray-200">
      
    
      {/* ================= Notifications ================= */}
<section>
  <h2 className="text-sm font-semibold mb-3">Notifications</h2>
  <ul className="flex flex-col gap-4 text-sm">
    {notifications.map((n, i) => (
      <li key={i} className="flex items-start gap-3">
        {/* ✅ No inversion, icon color remains unchanged in light/dark */}
        <img src={n.icon} alt="" className="w-6 h-6" />
        <div>
          <p className="text-[13px] text-gray-800 dark:text-gray-200">{n.text}</p>
          <span className="text-xs text-gray-400">{n.time}</span>
        </div>
      </li>
    ))}
  </ul>
</section>

      {/* ================= Activities ================= */}
      <section>
        <h2 className="text-sm font-semibold mb-3">Activities</h2>
        <ul className="flex flex-col gap-4 text-sm relative">
          {activities.map((a, i) => (
            <li key={i} className="flex items-start gap-3 relative">
              {i !== activities.length - 1 && (
                <span className="absolute left-[11px] top-8 w-px h-full bg-gray-200 dark:bg-gray-700" />
              )}
              {/* ❌ Do NOT invert (keep original color) */}
              <img src={a.icon} alt="" className="w-6 h-6 flex-shrink-0 relative z-10" />
              <div>
                <p className="text-[13px] text-gray-800 dark:text-gray-200">{a.text}</p>
                <span className="text-xs text-gray-400">{a.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= Contacts ================= */}
      <section>
        <h2 className="text-sm font-semibold mb-3">Contacts</h2>
        <ul className="flex flex-col gap-3 text-sm">
          {contacts.map((c, i) => (
            <li key={i} className="flex items-center gap-3">
              {/* ❌ Do NOT invert (avatars should remain real images) */}
              <img src={c.icon} alt={c.name} className="w-6 h-6 rounded-full" />
              <span>{c.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}