import React from 'react';
import BatteryStateCard from '../components/Battery/BatteryStateCard';
import PowerFlowCard from '../components/Battery/PowerFlowCard';
import EventsTable from '../components/Battery/EventsTable';
import BatteryInfoCard from '../components/Battery/BatteryInfoCard';

const BatteryPage: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <BatteryStateCard percentage={40.45} />
      </div>

      <div className="col-span-6">
        <PowerFlowCard
          batteryPower={1300.4}
          loadPower={8348.6}
          gridPower={7157.0}
        />
      </div>

      <div className="col-span-3">
        <EventsTable
          events={[
            { time: '15:49:47', event: 'Battery State - Holding' },
            { time: '15:50:01', event: 'Battery State - Discharging' },
            { time: '15:50:13', event: 'System Stopped' },
            { time: '15:56:14', event: 'Battery State - Charging' }
          ]}
        />
      </div>

      <div className="col-span-3">
        <BatteryInfoCard
          title="BK1"
          info={{
            'Total Strings': { value: '10', color: 'text-white' },
            'String average Voltage': { value: '650.10 V', color: 'text-green-500' },
            'String average Current': { value: '100.00 A', color: 'text-red-500' },
            'Module Min. Temp.': { value: '32.26 °C', color: 'text-blue-500' },
            'Module Max. Temp.': { value: '36.18 °C', color: 'text-orange-500' }
          }}
        />
      </div>
    </div>
  );
};

export default BatteryPage;