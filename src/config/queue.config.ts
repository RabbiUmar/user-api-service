import { BullModule } from '@nestjs/bullmq';
import { FILE, MAIL, SMS } from 'src/enums/queue.enums';
export const QueueConfig: any = BullModule.forRoot({
  connection: {
    url: `${process.env.REDIS_URL}/1`,
  },
  defaultJobOptions: {
    removeOnComplete: 1000,
    removeOnFail: 5000,
    attempts: 3,
  },
});

export const QueueRegister = BullModule.registerQueue(
  { name: MAIL },
  { name: SMS },
  { name: FILE },
)
