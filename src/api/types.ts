export type ClinicSchedule = {
    startsOn: string;
    endsOn: string;
    doctors: Doctor[];
}
type Doctor = {
    id: number;
    name: string;
    startsOn: string;
    endsOn: string;
    profession: string;
    img: string;
    availableOperations: Operation[];
    schedule: DoctorSchedule[];
}

type DoctorSchedule = {
    startsOn: string;
    endsOn: string;
    type: ScheduleType;
}

type Operation = {
    name: string;
    requiredTime: string;
}

type ScheduleType = 'lunch' | 'operation' | 'available' | 'unavailable'

