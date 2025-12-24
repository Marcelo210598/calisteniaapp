import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PremiumState {
    isPremium: boolean;
    plan: 'monthly' | 'yearly' | null;
    setPremium: (status: boolean, plan?: 'monthly' | 'yearly' | null) => void;
    upgrade: (plan: 'monthly' | 'yearly') => void;
    downgrade: () => void;
}

export const usePremiumStore = create<PremiumState>()(
    persist(
        (set) => ({
            isPremium: false,
            plan: null,
            setPremium: (status, plan = null) => set({ isPremium: status, plan }),
            upgrade: (plan) => set({ isPremium: true, plan }),
            downgrade: () => set({ isPremium: false, plan: null }),
        }),
        {
            name: 'califorce-premium-storage',
        }
    )
);
