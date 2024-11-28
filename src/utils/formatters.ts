export const formatNumber = (value: number, decimals: number = 1): string => {
  return value.toFixed(decimals);
};

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const getStatusColor = (value: number, thresholds: { warning: number; danger: number }): string => {
  if (value >= thresholds.danger) return 'text-red-500';
  if (value >= thresholds.warning) return 'text-yellow-500';
  return 'text-green-500';
};