import { useQuery } from '@tanstack/react-query';
import { fetchSensorData } from '../services/api';
import { SensorData } from '../types/sensor';

export const useSensorData = () => {
  return useQuery<SensorData[], Error>({
    queryKey: ['sensorData'],
    queryFn: fetchSensorData,
    refetchInterval: 30000,
    retry: 3,
    staleTime: 10000,
  });
};