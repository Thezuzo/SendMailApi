import { IUsersRepository } from "../../repositories/IUserRepositories";
import { ICreateUserDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUserCase {
  private usersRepository: IUsersRepository;
  private mailProvider: IMailProvider;

  constructor(usersRepository: IUsersRepository, mailProvider: IMailProvider) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }

  async execute(data: ICreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "equipe do meu app",
        email: "equipe@meuapp.com",
      },
      subject: "Seja bem vindo a plataforma",
      body: "<p>Voce já pode fazer login em nosso app.</p>",
    });
  }
}
