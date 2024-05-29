import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUserCase } from "./CreateUserUserCase";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const createUserUserCase = new CreateUserUserCase(
    postgresUsersRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUserCase
)

export { createUserUserCase, createUserController}