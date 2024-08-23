import { Notification } from '../../Domain/Notification';
import { v4 as uuidv4 } from 'uuid';
import CreateNotificationCommand from "../../Application/Notifications/Command/CreateNotificationCommand";
import GetNotificationQuery from "../../Application/Notifications/Query/GetNotificationQuery";
import IQueryBus from "../../../SharedContext/Infrastructure/Providers/Interface/IQueryBus";
import ICommandBus from "../../../SharedContext/Infrastructure/Providers/Interface/ICommandBus";

class CreateNotificationController {
    construtor(queryBus, commandBus) {
        if (!(queryBus instanceof IQueryBus)) {
            throw new Error('queryBus must be an instance of QueryBus');
        }
        if (!(commandBus instanceof ICommandBus)) {
            throw new Error('commandBus must be an instance of CommandBus');
        }
        this.queryBus = queryBus;
        this.commandBus = commandBus;
    }

    async createNotification(req, res) {
        const { title, message, userId } = req.body;
        let id = uuidv4();
        const notification = new Notification(id, title, message, userId);

        await this.commandBus.dispatch(new CreateNotificationCommand(notification));

        let result = await this.queryBus.ask(new GetNotificationQuery(id));

        res.status(201).json(result.result());
    }
}