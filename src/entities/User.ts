export class User {
  public readonly id: string | number;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, "id">, id?: string | number) {
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.id = id || this.generateId(); // Correção na inicialização do id
  }

  // Método para gerar um ID se não for fornecido
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
