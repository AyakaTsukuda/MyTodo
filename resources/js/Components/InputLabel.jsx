export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-gray-600 text-sm uppercase` + className}>
            {value ? value : children}
        </label>
    );
}
