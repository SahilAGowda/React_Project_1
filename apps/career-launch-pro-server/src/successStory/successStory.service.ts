import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SuccessStoryServiceBase } from "./base/successStory.service.base";

@Injectable()
export class SuccessStoryService extends SuccessStoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
