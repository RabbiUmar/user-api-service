import { BullModule } from '@nestjs/bullmq';
// export const QueueConfig:any = BullModule.forRoot({
//   connection: {
//     url: `${process.env.REDIS_URL}/1`,
//   },
//   defaultJobOptions: {
//     removeOnComplete: 1000,
//     removeOnFail: 5000,
//     attempts: 3,
//   },
// });
// import { BullModule } from '@nestjs/bullmq';

export const QueueConfig: any = BullModule.forRoot({
  connection: {
    url: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
    // db: 1, // 👈 this selects Redis DB 1
  },
  defaultJobOptions: {
    removeOnComplete: 1000,
    removeOnFail: 5000,
    attempts: 3,
  },
});
