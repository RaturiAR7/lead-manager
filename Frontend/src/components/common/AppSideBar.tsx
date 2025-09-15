import { Home, Users, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AppSideBar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className='flex h-screen'>
      <aside
        className={cn(
          " text-black transition-all duration-300 flex flex-col",
          collapsed ? "w-12" : "w-52"
        )}
      >
        <div className='flex items-center justify-between p-4'>
          {!collapsed && <h1 className='text-lg font-bold'>LeadCRM</h1>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className='p-1 rounded hover:bg-gray-700'
          >
            {collapsed ? (
              <ChevronRight className='h-4 w-4' />
            ) : (
              <ChevronLeft className='h-4 w-4' />
            )}
          </button>
        </div>
        <nav className='flex-1 p-2 space-y-2'>
          <SidebarItem
            icon={<Home size={20} />}
            label='Dashboard'
            collapsed={collapsed}
          />
          <SidebarItem
            icon={<Users size={20} />}
            label='Leads'
            collapsed={collapsed}
          />
          <SidebarItem
            icon={<Settings size={20} />}
            label='Settings'
            collapsed={collapsed}
          />
        </nav>
      </aside>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  collapsed,
}: {
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer",
        collapsed ? "justify-center" : "justify-start"
      )}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </div>
  );
}
