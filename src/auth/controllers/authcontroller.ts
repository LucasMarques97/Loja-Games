import { Body, Controller, HttpStatus, HttpCode, Post, UseGuards } from "@nestjs/common";
import { UsuarioLogin } from "../entity/usuariologin.entity";
import { localAuthGuard } from "../guard/local-auth.guard";
import { AuthService } from "../services/auth.service";

@Controller("/auth")
export class AuthController{
    constructor(private authService: AuthService){}
    @UseGuards(localAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    login(@Body() user: UsuarioLogin): Promise<any> {
        return this.authService.login(user);
    }
}