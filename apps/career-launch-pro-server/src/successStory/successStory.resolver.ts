import * as graphql from "@nestjs/graphql";
import { SuccessStoryResolverBase } from "./base/successStory.resolver.base";
import { SuccessStory } from "./base/SuccessStory";
import { SuccessStoryService } from "./successStory.service";

@graphql.Resolver(() => SuccessStory)
export class SuccessStoryResolver extends SuccessStoryResolverBase {
  constructor(protected readonly service: SuccessStoryService) {
    super(service);
  }
}
