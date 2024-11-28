import { SensorData } from '../types/sensor';
import { generateMockData } from './mockData';

// Use mock data instead of real API calls for development
export const fetchSensorData = async (): Promise<SensorData[]> => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return generateMockData();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred');
  }
};