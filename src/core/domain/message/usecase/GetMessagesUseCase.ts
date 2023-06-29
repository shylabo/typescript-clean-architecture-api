import { GetMessagePort } from '../port/usecase/GetMessagePort';
import { MessageUseCaseDto } from './dto/MessageUseCaseDto';
import { UseCase } from '../../../common/Usecase';

export interface GetMessagesUseCase extends UseCase<GetMessagePort, MessageUseCaseDto[]> {
  execute(payload: GetMessagePort): Promise<MessageUseCaseDto[]>;
}
