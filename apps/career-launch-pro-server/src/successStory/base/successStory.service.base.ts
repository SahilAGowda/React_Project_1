/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SuccessStory as PrismaSuccessStory } from "@prisma/client";

export class SuccessStoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SuccessStoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.successStory.count(args);
  }

  async successStories(
    args: Prisma.SuccessStoryFindManyArgs
  ): Promise<PrismaSuccessStory[]> {
    return this.prisma.successStory.findMany(args);
  }
  async successStory(
    args: Prisma.SuccessStoryFindUniqueArgs
  ): Promise<PrismaSuccessStory | null> {
    return this.prisma.successStory.findUnique(args);
  }
  async createSuccessStory(
    args: Prisma.SuccessStoryCreateArgs
  ): Promise<PrismaSuccessStory> {
    return this.prisma.successStory.create(args);
  }
  async updateSuccessStory(
    args: Prisma.SuccessStoryUpdateArgs
  ): Promise<PrismaSuccessStory> {
    return this.prisma.successStory.update(args);
  }
  async deleteSuccessStory(
    args: Prisma.SuccessStoryDeleteArgs
  ): Promise<PrismaSuccessStory> {
    return this.prisma.successStory.delete(args);
  }
}