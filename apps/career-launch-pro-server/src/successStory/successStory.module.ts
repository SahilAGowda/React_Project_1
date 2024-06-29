import { Module } from "@nestjs/common";
import { SuccessStoryModuleBase } from "./base/successStory.module.base";
import { SuccessStoryService } from "./successStory.service";
import { SuccessStoryController } from "./successStory.controller";
import { SuccessStoryResolver } from "./successStory.resolver";

@Module({
  imports: [SuccessStoryModuleBase],
  controllers: [SuccessStoryController],
  providers: [SuccessStoryService, SuccessStoryResolver],
  exports: [SuccessStoryService],
})
export class SuccessStoryModule {}
