import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IndustryPartnershipServiceBase } from "./base/industryPartnership.service.base";

@Injectable()
export class IndustryPartnershipService extends IndustryPartnershipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
