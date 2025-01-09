export interface PerformanceData {
    device: string;
    team: string;
    shift: string;
    goodCount: number;
    rejectCount: number;
    targetCount: number;
    timestamp: string;
}

export interface Challenge {
    id: string;
    name: string;
    duration: number;
    metric: 'efficiency' | 'quality';
    teams: string[];
}