// src/app/api/contato/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// 🛑 IMPORTANTE: Configure esta variável de ambiente! 
// No seu arquivo .env.local, adicione: RESEND_API_KEY="sk_resend_..."
const resend = new Resend(process.env.RESEND_API_KEY); 

const TARGET_EMAIL = "remmyllem@gmail.com";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nome, sobrenome, email, assunto, mensagem } = body;

        // 1. Validação simples no servidor
        if (!nome || !sobrenome || !email || !assunto || !mensagem) {
            return NextResponse.json({ message: 'Dados incompletos' }, { status: 400 });
        }

        // 2. Montar o e-mail
        const data = await resend.emails.send({
            from: 'Formulário Contato <onboarding@resend.dev>', // 🛑 Mudar para um domínio que você pode verificar no Resend
            to: TARGET_EMAIL, 
            reply_to: email, // Resposta irá para o e-mail do remetente
            subject: `Mensagem de Contato: ${assunto}`,
            html: `
                <h1>Nova Mensagem do Site da Igreja</h1>
                <p><strong>Nome Completo:</strong> ${nome} ${sobrenome}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Assunto:</strong> ${assunto}</p>
                <hr>
                <p><strong>Mensagem:</strong></p>
                <p>${mensagem.replace(/\n/g, '<br>')}</p>
            `,
        });

        return NextResponse.json({ success: true, data }, { status: 200 });

    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        return NextResponse.json({ message: 'Falha no envio do e-mail (API)' }, { status: 500 });
    }
}