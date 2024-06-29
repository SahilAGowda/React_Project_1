import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplicationStepService } from "./applicationStep.service";
import { ApplicationStepControllerBase } from "./base/applicationStep.controller.base";

@swagger.ApiTags("applicationSteps")
@common.Controller("applicationSteps")
export class ApplicationStepController extends ApplicationStepControllerBase {
  constructor(protected readonly service: ApplicationStepService) {
    super(service);
  }
}
