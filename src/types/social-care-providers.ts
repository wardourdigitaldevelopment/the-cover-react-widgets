// Interface for a single region's data
export interface RegionData {
  region: string;
  total: number;
}

// Interface for the data of a single year
export interface YearlyData {
  year: number;
  total: number;
  regions: RegionData[];
}