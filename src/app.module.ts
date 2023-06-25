import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { ComputerModule } from './computer/computer.module';
import { DiskModule } from './disk/disk.module';
import { CpuModule } from './cpu/cpu.module';
import { PowerModule } from './power/power.module';

@Module({
  imports: [MessagesModule, ComputerModule, DiskModule, CpuModule, PowerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
