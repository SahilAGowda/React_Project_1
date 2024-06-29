import { IndustryPartnershipWhereInput } from "./IndustryPartnershipWhereInput";
import { IndustryPartnershipOrderByInput } from "./IndustryPartnershipOrderByInput";

export type IndustryPartnershipFindManyArgs = {
  where?: IndustryPartnershipWhereInput;
  orderBy?: Array<IndustryPartnershipOrderByInput>;
  skip?: number;
  take?: number;
};
