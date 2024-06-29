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
import { Benefit } from "./Benefit";
import { BenefitCountArgs } from "./BenefitCountArgs";
import { BenefitFindManyArgs } from "./BenefitFindManyArgs";
import { BenefitFindUniqueArgs } from "./BenefitFindUniqueArgs";
import { DeleteBenefitArgs } from "./DeleteBenefitArgs";
import { BenefitService } from "../benefit.service";
@graphql.Resolver(() => Benefit)
export class BenefitResolverBase {
  constructor(protected readonly service: BenefitService) {}

  async _benefitsMeta(
    @graphql.Args() args: BenefitCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Benefit])
  async benefits(
    @graphql.Args() args: BenefitFindManyArgs
  ): Promise<Benefit[]> {
    return this.service.benefits(args);
  }

  @graphql.Query(() => Benefit, { nullable: true })
  async benefit(
    @graphql.Args() args: BenefitFindUniqueArgs
  ): Promise<Benefit | null> {
    const result = await this.service.benefit(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Benefit)
  async deleteBenefit(
    @graphql.Args() args: DeleteBenefitArgs
  ): Promise<Benefit | null> {
    try {
      return await this.service.deleteBenefit(args);
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