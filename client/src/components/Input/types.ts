export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string
    onChangeValue: (value: string) => void
    text?: string
}
