import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ReversePipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata) {

        console.log("Pipe: reverse pipe");
        throw new BadRequestException("BAD REQUEST EXCEPTION");
        return value.split('').reverse().join('');
    }
}