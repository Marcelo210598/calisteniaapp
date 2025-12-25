/**
 * CalIA Message Limits for Freemium Users
 * Manages daily message count in localStorage
 */

const STORAGE_KEY = 'calia_messages';
const DAILY_LIMIT = 20;

interface MessageData {
    count: number;
    date: string;
}

/**
 * Get today's date in YYYY-MM-DD format
 */
function getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
}

/**
 * Get message data from localStorage
 */
function getMessageData(): MessageData {
    if (typeof window === 'undefined') {
        return { count: 0, date: getTodayDate() };
    }

    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
            return { count: 0, date: getTodayDate() };
        }
        return JSON.parse(stored);
    } catch {
        return { count: 0, date: getTodayDate() };
    }
}

/**
 * Save message data to localStorage
 */
function saveMessageData(data: MessageData): void {
    if (typeof window === 'undefined') return;

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error('Failed to save CalIA message data:', error);
    }
}

/**
 * Reset counter if it's a new day
 */
export function resetIfNewDay(): void {
    const data = getMessageData();
    const today = getTodayDate();

    if (data.date !== today) {
        saveMessageData({ count: 0, date: today });
    }
}

/**
 * Get current message count for today
 */
export function getMessageCount(): number {
    resetIfNewDay();
    const data = getMessageData();
    return data.count;
}

/**
 * Increment message count and return new count
 */
export function incrementMessageCount(): number {
    resetIfNewDay();
    const data = getMessageData();
    const newCount = data.count + 1;
    saveMessageData({ count: newCount, date: data.date });
    return newCount;
}

/**
 * Check if user can send another message
 */
export function canSendMessage(): boolean {
    const count = getMessageCount();
    return count < DAILY_LIMIT;
}

/**
 * Get remaining messages for today
 */
export function getRemainingMessages(): number {
    const count = getMessageCount();
    return Math.max(0, DAILY_LIMIT - count);
}

/**
 * Get the daily limit
 */
export function getDailyLimit(): number {
    return DAILY_LIMIT;
}
