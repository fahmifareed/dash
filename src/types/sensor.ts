export interface SensorData {
  time: number;
  sensor_identifier: string;
  sensor_type: string;
  [key: string]: any;
}

export interface SensorState {
  data: SensorData[];
  isLoading: boolean;
  error: Error | null;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill?: boolean;
  }[];
}