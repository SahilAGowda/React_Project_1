import * as graphql from "@nestjs/graphql";
import { ApplicationStepResolverBase } from "./base/applicationStep.resolver.base";
import { ApplicationStep } from "./base/ApplicationStep";
import { ApplicationStepService } from "./applicationStep.service";

@graphql.Resolver(() => ApplicationStep)
export class ApplicationStepResolver extends ApplicationStepResolverBase {
  constructor(protected readonly service: ApplicationStepService) {
    super(service);
  }
}
