import { toast } from "sonner";
import { useRouter } from "next/navigation";

/**
 * Show a premium upgrade toast with a button to navigate to /premium
 * @param message - The message to display in the toast
 */
export function showPremiumToast(message: string) {
    toast.error(message, {
        action: {
            label: "Desbloquear Premium",
            onClick: () => {
                window.location.href = '/premium';
            }
        },
        duration: 5000,
        style: {
            background: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
        },
        actionButtonStyle: {
            background: '#FF9F1C',
            color: 'white',
            fontWeight: '600',
            padding: '8px 16px',
            borderRadius: '6px',
        }
    });
}
