import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IndustryPartnershipService } from "./industryPartnership.service";
import { IndustryPartnershipControllerBase } from "./base/industryPartnership.controller.base";

@swagger.ApiTags("industryPartnerships")
@common.Controller("industryPartnerships")
export class IndustryPartnershipController extends IndustryPartnershipControllerBase {
  constructor(protected readonly service: IndustryPartnershipService) {
    super(service);
  }
}
