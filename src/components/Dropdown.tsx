import styles from "./dropdown.module.css";
import { useEffect, useRef, type ReactNode } from "react";

type DropdownProps = {
  children: ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  style?: React.CSSProperties;
  ariaLabelledby?: string;
  selectedLabel: string;
  id?: string;
  disabled?: boolean;
};

export const Dropdown = ({
  children,
  className,
  style,
  ariaLabelledby,
  open,
  setOpen,
  id,
  selectedLabel,
  disabled,
}: DropdownProps) => {
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, setOpen]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const classes = [
    styles["custom-dropdown"],
    className,
    open ? styles["open"] : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      ref={dropdownRef}
      style={style}
      id={id}
      aria-disabled={disabled}
    >
      <button
        type="button"
        className={styles["dropdown-toggle"]}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={ariaLabelledby}
        onClick={() => !disabled && setOpen((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "Enter") {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <span>{selectedLabel}</span>
        <span className={styles["dropdown-caret"]} aria-hidden="true" />
      </button>
      {open && (
        <div
          className={styles["dropdown-menu"]}
          role="listbox"
          aria-labelledby={ariaLabelledby}
        >
          {children}
        </div>
      )}
    </div>
  );
};
