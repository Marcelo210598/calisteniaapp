import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function GET() {
    try {
        // Check if API key exists
        const apiKey = process.env.GROQ_API_KEY;

        if (!apiKey) {
            return NextResponse.json({
                status: "error",
                message: "GROQ_API_KEY não encontrada",
                hasKey: false,
            });
        }

        // Test Groq connection
        const groq = new Groq({ apiKey });

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: "Say 'Hello' in Portuguese",
                },
            ],
            model: "llama-3.3-70b-versatile",
            max_tokens: 50,
        });

        const reply = completion.choices[0]?.message?.content;

        return NextResponse.json({
            status: "success",
            message: "Groq está funcionando!",
            hasKey: true,
            keyPrefix: apiKey.substring(0, 10) + "...",
            testResponse: reply,
            model: "llama-3.3-70b-versatile",
        });
    } catch (error: any) {
        return NextResponse.json({
            status: "error",
            message: error.message,
            hasKey: !!process.env.GROQ_API_KEY,
            keyPrefix: process.env.GROQ_API_KEY?.substring(0, 10) + "...",
            errorDetails: {
                name: error.name,
                status: error.status,
                code: error.code,
            },
        });
    }
}
