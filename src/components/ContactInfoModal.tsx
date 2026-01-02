import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faLink, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

interface ContactInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactInfoModal({ isOpen, onClose }: ContactInfoModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-[var(--card-bg)] w-full max-w-[552px] max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl flex flex-col transition-colors">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--divider)]">
                    <h2 className="text-xl font-semibold text-[var(--text-main)] transition-colors">Om Achrekar</h2>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full text-[var(--text-dim)] transition-colors"
                    >
                        <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-lg font-semibold text-[var(--text-main)] transition-colors">Contact Info</h3>
                    </div>

                    <div className="space-y-6">
                        {/* LinkedIn */}
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 text-[var(--text-dim)] transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-base font-semibold text-[var(--text-main)] transition-colors">Your Profile</h4>
                                <a href="https://linkedin.com/in/achrekarom" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--accent-color)] hover:underline block break-all">
                                    linkedin.com/in/achrekarom
                                </a>
                            </div>
                        </div>

                        {/* GitHub */}
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-[var(--text-dim)] transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-base font-semibold text-[var(--text-main)] transition-colors">GitHub</h4>
                                <a href="https://github.com/achrekarom12" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--accent-color)] hover:underline block break-all">
                                    github.com/achrekarom12
                                </a>
                            </div>
                        </div>

                        {/* LeetCode */}
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <FontAwesomeIcon icon={faCode} className="w-5 h-5 text-[var(--text-dim)] transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-base font-semibold text-[var(--text-main)] transition-colors">LeetCode</h4>
                                <a href="https://leetcode.com/u/achrekarom12/" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--accent-color)] hover:underline block break-all">
                                    leetcode.com/u/achrekarom12
                                </a>
                            </div>
                        </div>
                        {/* Email */}
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-[var(--text-dim)] transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-base font-semibold text-[var(--text-main)] transition-colors">Email</h4>
                                <a href="mailto:hello@itsom.dev" className="text-sm text-[var(--accent-color)] hover:underline block break-all">
                                    hello@itsom.dev
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
