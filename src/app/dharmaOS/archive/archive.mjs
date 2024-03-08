import { exec } from 'child_process';
import { readFile, writeFile } from 'fs';
const rootLocation = '/Users/paytonlee/Developer/Github/Dharmabot/src/app';
import fs from 'fs';
import path from 'path';

// Objetivo: Criar um banco de dados baseado em arquivos com suporte completo para operações CRUD (criação, recuperação, atualização e exclusão de arquivos).
class FileDatabase {
  constructor(basePath) {
    this.basePath = basePath;
  }

  // Objetivo: Criar um novo arquivo no banco de dados.
  createFile(fileName, content) {
    const filePath = path.join(this.basePath, fileName);
    fs.writeFileSync(filePath, content);
  }

  // Objetivo: Recuperar um arquivo do banco de dados.
  retrieveFile(fileName) {
    const filePath = path.join(this.basePath, fileName);
    if (!fs.existsSync(filePath)) {
      console.error("Arquivo não encontrado:", fileName);
      return null;
    }
    return fs.readFileSync(filePath, 'utf8');
  }

  // Objetivo: Atualizar um arquivo existente no banco de dados.
  updateFile(fileName, newContent) {
    const filePath = path.join(this.basePath, fileName);
    if (!fs.existsSync(filePath)) {
      console.error("Arquivo não encontrado para atualização:", fileName);
      return false;
    }
    fs.writeFileSync(filePath, newContent);
    return true;
  }

  // Objetivo: Excluir um arquivo do banco de dados.
  deleteFile(fileName) {
    const filePath = path.join(this.basePath, fileName);
    if (!fs.existsSync(filePath)) {
      console.error("Arquivo não encontrado para exclusão:", fileName);
      return false;
    }
    fs.unlinkSync(filePath);
    return true;
  }

  // Objetivo: Ler dados de um arquivo JSON.
  readJson(fileName) {
    const content = this.retrieveFile(fileName);
    try {
      return JSON.parse(content);
    } catch (error) {
      console.error("Erro ao analisar JSON:", error);
      return null;
    }
  }

  // Objetivo: Ler dados de um arquivo Markdown.
  readMarkdown(fileName) {
    const content = this.retrieveFile(fileName);
    // Aqui, você pode adicionar uma lógica personalizada para analisar o Markdown, se necessário.
    return content;
  }
}
const Archive = new FileDatabase(rootLocation+"/dharmaOS/db");
export { Archive };
// Criando um arquivo
// db.createFile('exemplo.json', JSON.stringify({ chave: 'valor inicial' }));
// Lendo e logando o conteúdo inicial
// let data = db.readJson('exemplo.json');
// console.log("Conteúdo inicial:", data);
// Atualizando o arquivo
// db.updateFile('exemplo.json', JSON.stringify({ chave: 'valor atualizado' }));
// Lendo e logando o conteúdo atualizado
// data = db.readJson('exemplo.json');
// console.log("Conteúdo atualizado:", data);
// Excluindo o arquivo
// db.deleteFile('exemplo.json');
// console.log("Arquivo 'exemplo.json' excluído.");
