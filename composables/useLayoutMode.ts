import {MODES} from "#constants";
import type {Mode} from "#types";

export default function useLayoutMode() {
    const mode = useState<Mode>('layout-mode', () => MODES.TABLE)

    const setMode = (value: Mode) => {
        mode.value = value
    }

    return {
        mode,
        setMode,
    }
}
