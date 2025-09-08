import React from "react";

type NativeInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "className" | "placeholder"
>;

interface InputProps extends NativeInputProps {
  value: string | undefined | null;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Input = (props: InputProps) => {
  const { className, placeholder, value, onChange, onKeyPress, type, id, disabled, ...rest } = props;
  return (
    <input
      className={`w-full text-white text-xs sm:text-sm bg-gray-800/80 py-3 px-4 sm:px-6 rounded-2xl outline-none border-2 border-gray-600/50 focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300 placeholder-gray-400/60 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 ${className}`}
      placeholder={placeholder}
      id={id}
      type={type || "text"}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={onKeyPress}
      disabled={disabled}
      {...rest}
    />
  );
};
