import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { Bcrypt } from './bcrypt/bcrypt';
import { jwtConstants } from './constants/constants';
import { AuthController } from './controllers/authcontroller';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { localStrategy } from './strategy/local.strategy';

@Module({
  imports: [UsuariosModule, PassportModule, 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '24h'}
    })],
  providers: [Bcrypt, AuthService, localStrategy, JwtStrategy],
  controllers:[AuthController],
  exports:[Bcrypt],
})
export class AuthModule { }
