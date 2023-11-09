// api.test.js
import { fetchUserData } from './exercise';

describe('fetchUserData', () => {
  it('deve retornar os dados do usuário corretos', async () => {
    // Função de leitura de arquivo simulada para os testes
    const mockReadFileFn = async (filePath: string, encoding: string) => {
      // Simule a leitura do arquivo e retorne os dados simulados
      return JSON.stringify({
        nome: "Pedro",
        email: "pedro@uol.com.br",
        salario: 8679,
        estado: "DF",
        empresa: "Facebook",
        idade: 43,
        sexo: "M",
        cpf: "637.637.477-88"
      });
    };

    const userId = "637.637.477-88";
    const userData = await fetchUserData(userId, mockReadFileFn);

    expect(userData).toEqual({
      nome: "Pedro",
      email: "pedro@uol.com.br",
      salario: 8679,
      estado: "DF",
      empresa: "Facebook",
      idade: 43,
      sexo: "M",
      cpf: "637.637.477-88"
    });
  });

  it('deve tratar erros de chamada de API', async () => {
    // Crie um erro simulado que você deseja lançar na chamada de API
    const error = new Error('Erro na chamada de API');

    // Função de leitura de arquivo simulada que lança o erro
    const mockReadFileFn = async (filePath: string, encoding: string) => {
      throw error;
    };

    // Chame a função que faz a chamada de API com a função simulada e verifique se ela lança o erro simulado
    const userId = "24141";
    await expect(fetchUserData(userId, mockReadFileFn)).rejects.toThrow('Erro na chamada de API');
  });
});
