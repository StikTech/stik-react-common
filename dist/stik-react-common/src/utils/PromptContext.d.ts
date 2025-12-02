import { default as React, ReactNode } from 'react';
type PromptOptions = {
    title: string;
    content: string;
    options: {
        text: string;
        action: () => any;
        className: string;
    }[];
};
type PromptContextType = {
    showPrompt: (options: PromptOptions) => void;
    hidePrompt: () => void;
};
export declare const PromptProvider: React.FC<{
    children: ReactNode;
}>;
export declare const usePrompt: () => PromptContextType;
export {};
