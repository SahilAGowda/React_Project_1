import { IndustryPartnership as TIndustryPartnership } from "../api/industryPartnership/IndustryPartnership";

export const INDUSTRYPARTNERSHIP_TITLE_FIELD = "id";

export const IndustryPartnershipTitle = (
  record: TIndustryPartnership
): string => {
  return record.id?.toString() || String(record.id);
};
