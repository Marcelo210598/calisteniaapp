const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = "AIzaSyDIjKxgIZKKDiPG1ptgZ9yDeYmAd6v0NOY";

console.log("🔍 Listando modelos disponíveis para sua chave...\n");

const genAI = new GoogleGenerativeAI(API_KEY);

async function listModels() {
    try {
        // Try different model names
        const modelsToTry = [
            "gemini-pro",
            "gemini-1.5-pro",
            "gemini-1.5-flash",
            "gemini-1.0-pro",
            "models/gemini-pro",
            "models/gemini-1.5-pro",
            "models/gemini-1.5-flash"
        ];

        for (const modelName of modelsToTry) {
            try {
                console.log(`\n🧪 Testando modelo: ${modelName}`);
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent("Say 'Hello' in Portuguese");
                const response = await result.response;
                const text = response.text();

                console.log(`✅ SUCESSO! Modelo funcionando: ${modelName}`);
                console.log(`Resposta: ${text}`);
                console.log(`\n🎯 USE ESTE MODELO: "${modelName}"\n`);
                process.exit(0);
            } catch (error) {
                console.log(`❌ Falhou: ${error.message.substring(0, 100)}...`);
            }
        }

        console.log("\n❌ Nenhum modelo funcionou!");
        process.exit(1);
    } catch (error) {
        console.error("Erro:", error.message);
        process.exit(1);
    }
}

listModels();
