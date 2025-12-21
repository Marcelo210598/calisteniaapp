"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export function CalIAChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Olá! Sou a CalIA, sua assistente de calistenia. Como posso te ajudar hoje? 💪",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    // Focus input when sheet opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch("/api/calia", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();

            if (data.error) {
                // Check if it's an API key issue (500 error or specific error message)
                const isApiKeyIssue = response.status === 500 ||
                    data.error.toLowerCase().includes('api') ||
                    data.error.toLowerCase().includes('key');

                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant",
                        content: isApiKeyIssue
                            ? "Desculpe, estou com problemas técnicos no momento. Por favor, tente novamente em instantes. Se o erro persistir, entre em contato com o suporte."
                            : "Desculpe, ocorreu um erro. Tente novamente em alguns instantes.",
                    },
                ]);
            } else {
                setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: data.reply },
                ]);
            }
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Erro de conexão. Verifique sua internet e tente novamente.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 h-[60px] w-[60px] rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group p-[2px]"
                aria-label="Abrir CalIA Chat"
            >
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img
                        src="/calia-logo.jpg"
                        alt="CalIA"
                        className="w-full h-full object-cover"
                    />
                </div>
            </button>

            {/* Chat Sheet */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent
                    side="bottom"
                    className="h-[90vh] sm:h-[85vh] md:max-w-md md:right-6 md:bottom-6 md:h-[600px] md:rounded-lg p-0 flex flex-col"
                >
                    <SheetHeader className="px-6 py-4 border-b bg-gradient-to-r from-[#FF9F1C] to-[#FFC15E] text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <SheetTitle className="text-white text-xl font-bold">
                                    CalIA 🤖
                                </SheetTitle>
                                <SheetDescription className="text-white/90 text-sm">
                                    Sua assistente de calistenia
                                </SheetDescription>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:bg-white/20"
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </div>
                    </SheetHeader>

                    {/* Messages Area */}
                    <ScrollArea className="flex-1 px-4 py-4" ref={scrollRef}>
                        <div className="space-y-4 pb-4">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-2xl px-4 py-3 ${msg.role === "user"
                                            ? "bg-[#FF9F1C] text-white rounded-br-sm"
                                            : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-sm"
                                            }`}
                                    >
                                        <p className="text-sm whitespace-pre-wrap leading-relaxed">
                                            {msg.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-sm px-4 py-3">
                                        <Loader2 className="h-5 w-5 animate-spin text-[#FF9F1C]" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </ScrollArea>

                    {/* Input Area */}
                    <div className="border-t p-4 bg-white dark:bg-gray-950">
                        <div className="flex gap-2 mb-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Digite sua pergunta..."
                                disabled={isLoading}
                                className="flex-1 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C] disabled:opacity-50 text-sm"
                            />
                            <Button
                                onClick={handleSend}
                                disabled={!input.trim() || isLoading}
                                size="icon"
                                className="h-12 w-12 rounded-full bg-[#FF9F1C] hover:bg-[#FFC15E] disabled:opacity-50 shrink-0"
                            >
                                <Send className="h-5 w-5" />
                            </Button>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                            CalIA é uma IA. Consulte profissionais para recomendações personalizadas.
                        </p>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
}
