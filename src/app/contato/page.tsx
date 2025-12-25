import { Instagram, Mail } from 'lucide-react'
import Link from 'next/link'
import InstagramButton from '@/components/InstagramButton'

export default function ContatoPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#080357] to-black text-white">
            <div className="container mx-auto px-4 py-8 max-w-2xl">
                {/* Header */}
                <div className="text-center mb-12 pt-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF9F1C] to-[#FFB84D] bg-clip-text text-transparent">
                        Fale com a CaliForce
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Dúvidas, sugestões ou só pra mandar energia? Manda mensagem!
                    </p>
                </div>

                {/* Contact Options */}
                <div className="space-y-6">
                    {/* Instagram */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#FF9F1C]/50 transition-all">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-[#FF9F1C]/20 rounded-xl">
                                <Instagram className="w-8 h-8 text-[#FF9F1C]" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">Instagram</h2>
                                <p className="text-gray-400 mb-4">
                                    Siga a gente no Instagram! Compartilhe seus treinos, inspire a comunidade e fique por dentro das novidades.
                                </p>
                                <InstagramButton />
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#FF9F1C]/50 transition-all">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-[#FF9F1C]/20 rounded-xl">
                                <Mail className="w-8 h-8 text-[#FF9F1C]" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">E-mail</h2>
                                <p className="text-gray-400 mb-4">
                                    Prefere mandar um e-mail? Estamos prontos para te ouvir!
                                </p>
                                <Link
                                    href="mailto:califorceoficial@gmail.com"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full min-h-[48px] transition-all duration-200 active:scale-95 border border-white/20"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>califorceoficial@gmail.com</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Motivational Section */}
                <div className="mt-12 text-center p-8 bg-gradient-to-r from-[#FF9F1C]/10 to-[#080357]/50 rounded-2xl border border-[#FF9F1C]/20">
                    <p className="text-2xl font-bold mb-4">💪 Vamos crescer juntos!</p>
                    <p className="text-gray-300 leading-relaxed">
                        A CaliForce é mais que um app, é uma comunidade de guerreiros da calistenia.
                        Sua evolução inspira outros a começarem. Bora transformar vidas juntos!
                    </p>
                </div>
            </div>
        </div>
    )
}
