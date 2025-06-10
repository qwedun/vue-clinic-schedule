import type { ClinicSchedule } from "./types";
import { mocked_data } from "./data";

export const fetchSchedule = new Promise<ClinicSchedule>(resolve => {
    setTimeout(() => {
        resolve(mocked_data);
    }, 1000)
})