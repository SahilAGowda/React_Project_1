/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ApplicationStepService } from "../applicationStep.service";
import { ApplicationStepCreateInput } from "./ApplicationStepCreateInput";
import { ApplicationStep } from "./ApplicationStep";
import { ApplicationStepFindManyArgs } from "./ApplicationStepFindManyArgs";
import { ApplicationStepWhereUniqueInput } from "./ApplicationStepWhereUniqueInput";
import { ApplicationStepUpdateInput } from "./ApplicationStepUpdateInput";

export class ApplicationStepControllerBase {
  constructor(protected readonly service: ApplicationStepService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ApplicationStep })
  async createApplicationStep(
    @common.Body() data: ApplicationStepCreateInput
  ): Promise<ApplicationStep> {
    return await this.service.createApplicationStep({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ApplicationStep] })
  @ApiNestedQuery(ApplicationStepFindManyArgs)
  async applicationSteps(
    @common.Req() request: Request
  ): Promise<ApplicationStep[]> {
    const args = plainToClass(ApplicationStepFindManyArgs, request.query);
    return this.service.applicationSteps({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ApplicationStep })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async applicationStep(
    @common.Param() params: ApplicationStepWhereUniqueInput
  ): Promise<ApplicationStep | null> {
    const result = await this.service.applicationStep({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ApplicationStep })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateApplicationStep(
    @common.Param() params: ApplicationStepWhereUniqueInput,
    @common.Body() data: ApplicationStepUpdateInput
  ): Promise<ApplicationStep | null> {
    try {
      return await this.service.updateApplicationStep({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ApplicationStep })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteApplicationStep(
    @common.Param() params: ApplicationStepWhereUniqueInput
  ): Promise<ApplicationStep | null> {
    try {
      return await this.service.deleteApplicationStep({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
