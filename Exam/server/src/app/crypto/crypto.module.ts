// nestjs
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

// providers
import { CryptoProvider } from './providers';

@Module({
  imports: [
    JwtModule.register({ secret: 'encuestas' })
  ],
  providers: [CryptoProvider],
  exports: [CryptoProvider]
})
export class CryptoModule { }
