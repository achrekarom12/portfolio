'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from './ToastProvider';

interface OpenToModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function OpenToModal({ isOpen, onClose }: OpenToModalProps) {
    const { showToast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        userEmail: '',
        message: ''
    });

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const templateParams = {
            name: formData.name,
            message: formData.message,
            userEmail: formData.userEmail,
            time: new Date().toISOString(),
        };

        // Initialize with placeholder or default values if none provided by user
        // Using the user's provided IDs or common names
        // Initialize with environment variables
        emailjs.init({
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            blockHeadless: true,
            limitRate: {
                id: 'app',
                throttle: 60*1000,
            },
        });

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            showToast('Om is notified of your message!', 'success');
            setFormData({ name: '', userEmail: '', message: '' });
            onClose();
        } catch (error) {
            console.error('FAILED...', error);
            showToast('Failed to send message. Please try again.', 'info');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-[var(--card-bg)] w-full max-w-xl rounded-xl shadow-2xl overflow-hidden border border-[var(--border-color)] animate-slide-up">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4">
                    <h2 className="text-xl font-semibold text-[var(--text-main)]">Want to say hello? Send a message to me</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-[var(--input-bg)] rounded-full transition-colors text-[var(--text-dim)]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="space-y-1">
                        <label htmlFor="name" className="text-sm font-semibold text-[var(--text-dim)]">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full px-3 py-2 bg-[var(--input-bg)] rounded focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent outline-none text-[var(--text-main)] transition-all"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="userEmail" className="text-sm font-semibold text-[var(--text-dim)]">Email</label>
                        <input
                            type="email"
                            id="userEmail"
                            name="userEmail"
                            required
                            value={formData.userEmail}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            className="w-full px-3 py-2 bg-[var(--input-bg)] rounded focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent outline-none text-[var(--text-main)] transition-all"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="message" className="text-sm font-semibold text-[var(--text-dim)]">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can I help you?"
                            className="w-full px-3 py-2 bg-[var(--input-bg)] rounded focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent outline-none text-[var(--text-main)] transition-all resize-none"
                        ></textarea>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end pt-4 border-t border-[var(--border-color)]">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed min-w-[100px]"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
