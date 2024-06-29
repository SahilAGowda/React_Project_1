import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SuccessStoryService } from "./successStory.service";
import { SuccessStoryControllerBase } from "./base/successStory.controller.base";

@swagger.ApiTags("successStories")
@common.Controller("successStories")
export class SuccessStoryController extends SuccessStoryControllerBase {
  constructor(protected readonly service: SuccessStoryService) {
    super(service);
  }
}
