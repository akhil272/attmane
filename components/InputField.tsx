interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField = ({ label, placeholder }: InputFieldProps) => {
  return (
    <div className="flex-col flex w-full">
      <label className="text-lg ">{label}</label>
      <input className="border-2 p-2 rounded-md" placeholder={placeholder} />
    </div>
  );
};

export default InputField;
