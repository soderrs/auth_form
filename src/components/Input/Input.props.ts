export interface InputProps {
value?: string;
  required: boolean;
  styleType: string;
  placeholderValue: string;
  onChange?: (value: string) => void;
  type?: "email" | "password" | "text";
}

