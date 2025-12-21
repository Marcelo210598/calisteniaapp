import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req: Request) {
    try {
        // Validate API key exists
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error("GEMINI_API_KEY não encontrada no .env.local");
            return NextResponse.json(
                { error: "Configuração da API ausente. Verifique o .env.local" },
                { status: 500 }
            );
        }

        console.log("API Key presente:", apiKey.substring(0, 10) + "...");

        const { message } = await req.json();

        if (!message || typeof message !== "string") {
            return NextResponse.json(
                { error: "Mensagem inválida" },
                { status: 400 }
            );
        }

        const systemPrompt = `Você é a CalIA, assistente especialista em calistenia do app CaliForce.
Responda sempre em português brasileiro, de forma motivacional, prática e direta.
Áreas de especialidade:
- Exercícios de peso corporal (pull-ups, push-ups, muscle-ups, handstands, etc.)
- Progressões e técnicas para iniciantes e avançados
- Alimentação para hipertrofia e ganho de força
- Suplementação segura (whey protein, creatina, BCAA, etc.)
- Recuperação muscular e prevenção de lesões
- Motivação e consistência no treino

Use bullet points quando ajudar na clareza.
Seja empático, incentivador e sempre encoraje o usuário a continuar treinando.
Mantenha respostas concisas e práticas (máximo 200 palavras quando possível).

Pergunta do usuário: ${message}`;

        const result = await model.generateContent(systemPrompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ reply: text });
    } catch (error) {
        console.error("Erro na CalIA:", error);
        return NextResponse.json(
            { error: "Erro ao processar sua mensagem. Tente novamente." },
            { status: 500 }
        );
    }
}
