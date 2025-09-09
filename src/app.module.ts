import { Module } from '@nestjs/common';
import { UtilsModule } from './utils/utils.module';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisCacheOptions } from './config/redis.config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { JwtConfig } from './config/jwt.config';
import { MailConfig } from './config/mail.config';
import { QueueConfig, QueueRegister } from './config/queue.config';
import { PlanController } from './controllers/plan.controller';
import { StatusInterceptor } from './interceptors/status.interceptor';
import { AuthController } from './controllers/auth.controller';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';
import { TermLegalService } from './services/term-legal.service';
import { BullModule } from '@nestjs/bullmq';
import { PrismaService } from './config/prisma.service';
import { PlanService } from './enums/plan.service';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   // rootPath: join(__dirname, '..', 'uploads'),
    //   rootPath: './public',
    //   serveRoot: '/public',
    // }),
    QueueRegister,
    QueueConfig,
    JwtConfig,
    MailConfig,
    ConfigModule.forRoot(),
    HttpModule,
    UtilsModule,
    CacheModule.registerAsync(RedisCacheOptions)
  ],
  controllers: [
    AuthController,
    UserController,
    PlanController,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: StatusInterceptor,
    },
    UserService,
    RoleService,
    TermLegalService,
    PrismaService,
    PlanService
  ],
})
export class AppModule { }
