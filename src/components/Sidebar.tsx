import React from 'react';
import { 
  LayoutDashboard, 
  Battery, 
  AlertTriangle, 
  Calendar, 
  Settings, 
  Activity,
  Network,
  HelpCircle
} from 'lucide-react';
import { cn } from '../utils/cn';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'battery', icon: Battery, label: 'Battery' },
    { id: 'sld', icon: Activity, label: 'SLD' },
    { id: 'alarms', icon: AlertTriangle, label: 'Alarms', badge: 11 },
    { id: 'events', icon: Calendar, label: 'Events' },
    { id: 'trends', icon: Activity, label: 'Trends' },
    { id: 'network', icon: Network, label: 'Network' },
    { id: 'system', icon: Settings, label: 'System' }
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-navy-900 flex flex-col items-center py-4">
      <div className="mb-8">
        <img src="https://raw.githubusercontent.com/zenon-network/syrius/master/src/assets/logos/zenon-logo-white.svg" 
             alt="Logo" 
             className="w-12 h-12" />
      </div>
      
      <div className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full p-3 flex flex-col items-center justify-center text-sm relative",
                activeTab === item.id
                  ? "text-blue-500 after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-blue-500"
                  : "text-gray-400 hover:text-gray-200"
              )}
            >
              <Icon size={24} />
              <span className="mt-1 text-xs">{item.label}</span>
              {item.badge && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <button className="mt-auto text-gray-400 hover:text-gray-200 p-3">
        <HelpCircle size={24} />
      </button>
    </div>
  );
};

export default Sidebar;