import { ApplicationStepWhereInput } from "./ApplicationStepWhereInput";
import { ApplicationStepOrderByInput } from "./ApplicationStepOrderByInput";

export type ApplicationStepFindManyArgs = {
  where?: ApplicationStepWhereInput;
  orderBy?: Array<ApplicationStepOrderByInput>;
  skip?: number;
  take?: number;
};
