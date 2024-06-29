/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { IndustryPartnership } from "./IndustryPartnership";
import { IndustryPartnershipCountArgs } from "./IndustryPartnershipCountArgs";
import { IndustryPartnershipFindManyArgs } from "./IndustryPartnershipFindManyArgs";
import { IndustryPartnershipFindUniqueArgs } from "./IndustryPartnershipFindUniqueArgs";
import { DeleteIndustryPartnershipArgs } from "./DeleteIndustryPartnershipArgs";
import { IndustryPartnershipService } from "../industryPartnership.service";
@graphql.Resolver(() => IndustryPartnership)
export class IndustryPartnershipResolverBase {
  constructor(protected readonly service: IndustryPartnershipService) {}

  async _industryPartnershipsMeta(
    @graphql.Args() args: IndustryPartnershipCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [IndustryPartnership])
  async industryPartnerships(
    @graphql.Args() args: IndustryPartnershipFindManyArgs
  ): Promise<IndustryPartnership[]> {
    return this.service.industryPartnerships(args);
  }

  @graphql.Query(() => IndustryPartnership, { nullable: true })
  async industryPartnership(
    @graphql.Args() args: IndustryPartnershipFindUniqueArgs
  ): Promise<IndustryPartnership | null> {
    const result = await this.service.industryPartnership(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => IndustryPartnership)
  async deleteIndustryPartnership(
    @graphql.Args() args: DeleteIndustryPartnershipArgs
  ): Promise<IndustryPartnership | null> {
    try {
      return await this.service.deleteIndustryPartnership(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}