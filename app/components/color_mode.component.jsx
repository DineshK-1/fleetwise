import { useTheme } from 'next-themes';

export default function ColorMode() {

    const { theme, setTheme } = useTheme()

    return (
        <div className="color-mode" onClick={() => setTheme((t) => {
            if (t == "light") {
                return "dark"
            }
            return "light"
        })}>
            <span className="material-icons-outlined">dark_mode</span>
        </div>
    )
}