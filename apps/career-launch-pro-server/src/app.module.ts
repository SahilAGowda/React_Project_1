import { Module } from "@nestjs/common";
import { BenefitModule } from "./benefit/benefit.module";
import { CourseModule } from "./course/course.module";
import { ApplicationStepModule } from "./applicationStep/applicationStep.module";
import { SuccessStoryModule } from "./successStory/successStory.module";
import { BlogPostModule } from "./blogPost/blogPost.module";
import { IndustryPartnershipModule } from "./industryPartnership/industryPartnership.module";
import { ServiceModule } from "./service/service.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    BenefitModule,
    CourseModule,
    ApplicationStepModule,
    SuccessStoryModule,
    BlogPostModule,
    IndustryPartnershipModule,
    ServiceModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
