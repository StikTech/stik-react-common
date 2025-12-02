import { GlassCard } from "../components/GlassCard";
import "./PromptContext.css";
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type PromptOptions = {
  title: string;
  content: string;
  options: { text: string; action: () => any; className: string }[];
};
type PromptContextType = {
  showPrompt: (options: PromptOptions) => void;
  hidePrompt: () => void;
};

const PromptContext = createContext<PromptContextType | undefined>(undefined);

export const PromptProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [promptOptions, setPromptOptions] = useState<PromptOptions | null>(
    null
  );

  const showPrompt = (options: PromptOptions) => {
    setPromptOptions(options);
  };

  const hidePrompt = () => {
    setPromptOptions(null);
  };

  return (
    <PromptContext.Provider value={{ showPrompt, hidePrompt }}>
      {children}
      {promptOptions && (
        <div className="prompt-modal">
          <GlassCard>
            <h1>{promptOptions.title}</h1>
            <p>{promptOptions.content}</p>
            <div className="prompt-buttons">
              {promptOptions.options.map((option, index) => (
                <button
                  key={index}
                  className={option.className}
                  onClick={() => {
                    option.action();
                    hidePrompt();
                  }}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </GlassCard>
        </div>
      )}
    </PromptContext.Provider>
  );
};

export const usePrompt = (): PromptContextType => {
  const context = useContext(PromptContext);
  if (!context) {
    throw new Error("usePrompt must be used within a PromptProvider");
  }
  return context;
};
