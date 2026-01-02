'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

type ToastType = 'info' | 'success';

interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

    const showToast = useCallback((message: string, type: ToastType = 'info') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toast && (
                <div className="fixed top-20 left-1/2 -translate-x-1 z-[9999] animate-toast-in w-max max-w-[calc(100vw-2rem)]">
                    <div className="bg-[#1b1e23] border border-[#38434f] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-2xl flex items-center gap-2 sm:gap-3 backdrop-blur-md bg-opacity-90 transition-colors">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 rounded-full bg-[#71b7fb] flex items-center justify-center">
                            <FontAwesomeIcon icon={faInfoCircle} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1b1e23]" />
                        </div>
                        <span className="text-[11px] sm:text-sm font-medium whitespace-nowrap">{toast.message}</span>
                    </div>
                </div>
            )}
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}
