import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationStepServiceBase } from "./base/applicationStep.service.base";

@Injectable()
export class ApplicationStepService extends ApplicationStepServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
