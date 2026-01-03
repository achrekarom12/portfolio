import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faLightbulb } from '@fortawesome/free-solid-svg-icons';

interface SkillsModalProps {
    isOpen: boolean;
    onClose: () => void;
    skills: string[];
    title: string;
}

export default function SkillsModal({ isOpen, onClose, skills, title }: SkillsModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4 animate-fadeIn" onClick={onClose}>
            <div
                className="bg-[var(--card-bg)] w-full max-w-[552px] max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl flex flex-col transition-colors"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--divider)]">
                    <h2 className="text-xl font-semibold text-[var(--text-main)] transition-colors">Skills used as {title}</h2>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[var(--hover-bg)] text-[var(--text-dim)] transition-colors"
                    >
                        <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--divider)] text-sm font-medium text-[var(--text-main)] transition-colors"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
