// nestjs
import { Module } from '@nestjs/common';

// @encuestas packages
import { CryptoModule } from '@encuestas/crypto';
import { DataModule } from '@encuestas/data';

// providers
import { AuthProvider } from './providers';

// strategies
import { JwtStrategy } from './strategies';

// controllers
import { AuthController } from './controllers';

@Module({
  controllers: [AuthController],
  imports: [
    CryptoModule,
    DataModule,
  ],
  providers: [
    AuthProvider,
    JwtStrategy
  ]
})
export class AuthModule { }
