import { Module } from "@nestjs/common";
import { IndustryPartnershipModuleBase } from "./base/industryPartnership.module.base";
import { IndustryPartnershipService } from "./industryPartnership.service";
import { IndustryPartnershipController } from "./industryPartnership.controller";
import { IndustryPartnershipResolver } from "./industryPartnership.resolver";

@Module({
  imports: [IndustryPartnershipModuleBase],
  controllers: [IndustryPartnershipController],
  providers: [IndustryPartnershipService, IndustryPartnershipResolver],
  exports: [IndustryPartnershipService],
})
export class IndustryPartnershipModule {}
