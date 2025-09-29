// src/app/api/contato/route.tsx

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// REMOVIDO: A inicialização do Resend para fora da função

const TARGET_EMAIL = "remmyllem@gmail.com";

export async function POST(request: Request) {
    // 🛑 SOLUÇÃO: Instanciar Resend DENTRO da função POST
    // Isso garante que a variável de ambiente será lida no runtime.
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    try {
        const body = await request.json();
        const { nome, sobrenome, email, assunto, mensagem } = body;

        // 1. Validação simples no servidor
        if (!nome || !sobrenome || !email || !assunto || !mensagem) {
            return NextResponse.json({ message: 'Dados incompletos' }, { status: 400 });
        }

        // 2. Montar o e-mail
        const data = await resend.emails.send({
            from: 'Formulário Contato <onboarding@resend.dev>', // 🛑 Mudar para um domínio verificado!
            to: TARGET_EMAIL, 
            replyTo: email, // Corrigido para 'replyTo'
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