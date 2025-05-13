import React from "react";

interface InputFieldProps {
  placeholder?: string;
  type?: string;
  name: string;
  value: string;
  onChange: any;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  isInput?: boolean;
}

const CustomInput: React.FC<InputFieldProps> = ({
  placeholder = "",
  type = "text",
  name,
  value,
  onChange,
  disabled = false,
  required = false,
  error,
  isInput = true, // default true
}) => {
  const commonStyles = `w-full px-3 py-3 border rounded-md text-sm text-white bg-[#1c1c27] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#854ce6] focus:border-[#854ce6] ${
    error ? "border-red-500 focus:ring-red-500" : "border-[#84858a]"
  }`;

  return (
    <div className="w-full space-y-1">
      {isInput ? (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={commonStyles}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={commonStyles + " resize-none"} 
          rows={4} 
        />
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default CustomInput;
