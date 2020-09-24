// nestjs
import { Module } from '@nestjs/common';

// providers
import { DataProvider } from './providers';

@Module({
  providers: [DataProvider],
  exports: [DataProvider]
})
export class DataModule { }
