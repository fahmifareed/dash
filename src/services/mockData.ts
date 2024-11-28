import { SensorData } from '../types/sensor';

export const generateMockData = (): SensorData[] => {
  const now = Date.now();
  return [
    {
      time: now,
      sensor_identifier: 'sensor01',
      sensor_type: 'step_alignment',
      step_alignment_percentage: 99.8,
      misalignments_today: 3,
      cycle_count_step23: 1245678,
      estimated_lifespan_remaining_percentage: 82
    },
    {
      time: now,
      sensor_identifier: 'sensor02',
      sensor_type: 'emergency_stop_and_safety',
      emergency_stop_active: 0,
      handrail_entry_clear: 1,
      comb_plate_normal: 1
    },
    {
      time: now,
      sensor_identifier: 'sensor03',
      sensor_type: 'chain_and_lubrication',
      chain_speed_ms: 0.5,
      chain_tension_percentage: 95,
      system_status_normal: 1,
      lubrication_level_percentage: 78
    },
    {
      time: now,
      sensor_identifier: 'sensor04',
      sensor_type: 'passenger_and_safety',
      passengers_today: 12345,
      current_flow_rate_ppm: 15,
      object_alerts_today: 2,
      light_curtain_active: 1
    },
    {
      time: now,
      sensor_identifier: 'sensor05',
      sensor_type: 'gap_monitoring',
      left_gap_mm: 4.2,
      right_gap_mm: 4.5,
      out_of_spec_alerts_this_week: 3
    },
    {
      time: now,
      sensor_identifier: 'sensor06',
      sensor_type: 'operational_metrics',
      status_running: 1,
      direction_up: 1,
      hours_operated_today: 14.5,
      energy_used_today_kwh: 125
    }
  ];
};