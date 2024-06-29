import { SuccessStoryWhereInput } from "./SuccessStoryWhereInput";
import { SuccessStoryOrderByInput } from "./SuccessStoryOrderByInput";

export type SuccessStoryFindManyArgs = {
  where?: SuccessStoryWhereInput;
  orderBy?: Array<SuccessStoryOrderByInput>;
  skip?: number;
  take?: number;
};
