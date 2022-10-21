import{Injectable} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Bcrypt{
    async cripitografarsenha(senha: string): Promise<string>{
        let saltos: number = 10
        return await bcrypt.hash(senha, saltos)
    }

async compararSenhas(senhaBanco: string, senhaDigitada:string): Promise<Boolean>{
    return bcrypt.compareSync(senhaDigitada, senhaBanco)
    }
}