import { GetMessagePort } from '../port/usecase/get-message-port';
import { MessageUseCaseDto } from './dto/message-usecase-dto';
import { UseCase } from '../../../../core/common/usecase';

export interface GetMessagesUseCase extends UseCase<GetMessagePort, MessageUseCaseDto[]> {
  execute(payload: GetMessagePort): Promise<MessageUseCaseDto[]>;
}
