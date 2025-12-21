import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Chave da API Groq não encontrada" },
        { status: 500 }
      );
    }

    const { message } = await req.json();
    if (!message) {
      return NextResponse.json(
        { error: "Mensagem vazia" },
        { status: 400 }
      );
    }

    const groq = new Groq({ apiKey });

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
Mantenha respostas concisas e práticas (máximo 200 palavras quando possível).`;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama-3.3-70b-versatile", // Modelo atualizado e ativo
      temperature: 0.7,
      max_tokens: 500,
      top_p: 1,
    });

    const reply = completion.choices[0]?.message?.content || "Desculpe, não consegui processar sua mensagem.";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Erro CalIA:", error);
    return NextResponse.json(
      { error: "Erro ao processar mensagem: " + error.message },
      { status: 500 }
    );
  }
}
