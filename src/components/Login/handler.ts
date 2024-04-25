// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 const { email, senha } = req.body;

 // Simulando uma chamada de API para buscar usuários
 const response = await fetch("http://localhost:8080/users", {
    method: "get"
 });
 const data = await response.json();

 let userFound = false;
 data.forEach((item: any) => {
    if (item.email === email && item.senha === senha) {
      userFound = true;
    }
 });

 if (userFound) {
    // Redireciona o usuário para uma página de sucesso
    res.redirect(307, '/logged');
 } else {
    // Redireciona o usuário para uma página de erro
    res.redirect(307, '/error-page');
 }
}
