import { Module } from "@nestjs/common";
import { ApplicationStepModuleBase } from "./base/applicationStep.module.base";
import { ApplicationStepService } from "./applicationStep.service";
import { ApplicationStepController } from "./applicationStep.controller";
import { ApplicationStepResolver } from "./applicationStep.resolver";

@Module({
  imports: [ApplicationStepModuleBase],
  controllers: [ApplicationStepController],
  providers: [ApplicationStepService, ApplicationStepResolver],
  exports: [ApplicationStepService],
})
export class ApplicationStepModule {}
