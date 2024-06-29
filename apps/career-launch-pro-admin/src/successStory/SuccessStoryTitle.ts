import { SuccessStory as TSuccessStory } from "../api/successStory/SuccessStory";

export const SUCCESSSTORY_TITLE_FIELD = "id";

export const SuccessStoryTitle = (record: TSuccessStory): string => {
  return record.id?.toString() || String(record.id);
};
