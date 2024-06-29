import * as graphql from "@nestjs/graphql";
import { IndustryPartnershipResolverBase } from "./base/industryPartnership.resolver.base";
import { IndustryPartnership } from "./base/IndustryPartnership";
import { IndustryPartnershipService } from "./industryPartnership.service";

@graphql.Resolver(() => IndustryPartnership)
export class IndustryPartnershipResolver extends IndustryPartnershipResolverBase {
  constructor(protected readonly service: IndustryPartnershipService) {
    super(service);
  }
}
