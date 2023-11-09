import * as fs from 'fs/promises';

export async function fetchUserData(
  userId: string,
  readFileFn: (filePath: string, encoding: string) => Promise<string>
): Promise<any> {
  try {
    const conteudoArquivo = await readFileFn('../static/pessoas.json', 'utf-8');
    const objetoJson = JSON.parse(conteudoArquivo);
    return objetoJson;
  } catch (error) {
    throw error;
  }
}
