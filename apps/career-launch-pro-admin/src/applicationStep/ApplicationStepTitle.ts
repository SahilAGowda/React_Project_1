import { ApplicationStep as TApplicationStep } from "../api/applicationStep/ApplicationStep";

export const APPLICATIONSTEP_TITLE_FIELD = "id";

export const ApplicationStepTitle = (record: TApplicationStep): string => {
  return record.id?.toString() || String(record.id);
};
