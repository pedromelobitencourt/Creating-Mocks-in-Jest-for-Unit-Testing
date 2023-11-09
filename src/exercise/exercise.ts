import * as fs from 'fs/promises';

export async function fetchUserData(
  userId: string,
  readFileFn: (filePath: string, encoding: string) => Promise<string>
): Promise<any> {
  try {
    const fileContent = await readFileFn('../static/pessoas.json', 'utf-8');
    const jsonObj = JSON.parse(fileContent);
    return jsonObj;
  } catch (error) {
    throw error;
  }
}
