# Configuração do Banco de Dados - CaliForce

## Passo 1: Criar conta no Neon (PostgreSQL gratuito)

1. Acesse: https://neon.tech
2. Crie uma conta gratuita
3. Crie um novo projeto
4. Copie a **Connection String** (formato: `postgresql://user:password@host/database?sslmode=require`)

## Passo 2: Configurar variáveis de ambiente

1. Crie o arquivo `.env.local` na raiz do projeto
2. Adicione as seguintes variáveis:

```env
# Database
DATABASE_URL="sua-connection-string-do-neon-aqui"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="Feof+KsKfmI3C7vO2dWKJTKkVQv/MzGduEdKC6h5b4o="

# Stripe (já configurado)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="sua-chave-aqui"
STRIPE_SECRET_KEY="sua-chave-aqui"

# Groq API (já configurado)
GROQ_API_KEY="sua-chave-aqui"
```

## Passo 3: Executar migrations

Após configurar o DATABASE_URL, execute:

```bash
npx prisma migrate dev --name init
```

Isso criará todas as tabelas necessárias no banco de dados.

## Passo 4: Testar

1. Inicie o servidor: `npm run dev`
2. Acesse: http://localhost:3000/register
3. Crie uma conta
4. Faça login

## Estrutura do Banco

O banco terá as seguintes tabelas:
- **User**: usuários com email, senha, premium status
- **Account**: contas OAuth (futuro)
- **Session**: sessões de usuário
- **WorkoutProgress**: progresso de treinos
- **ChallengeProgress**: progresso de desafios

## Próximos passos

Após configurar o banco, você poderá:
- ✅ Criar conta e fazer login
- ✅ Salvar progresso no servidor
- ✅ Acessar de qualquer dispositivo
- ✅ Premium status persistente no banco
