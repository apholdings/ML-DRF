import useDarkMode from "hooks/useDarkMode";
import { Switch } from "@headlessui/react";
import { useState } from "react";


function DarkModeSwitch(){
    const [darkTheme, setDarkTheme] = useDarkMode();
    const [enabled, setEnabled] = useState(darkTheme);

    const ThemeIcon = () => {
        const handleMode = () => setDarkTheme(!darkTheme);
        return (
            <span onClick={handleMode}>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                        enabled
                            ? "bg-gray-100 dark:bg-dark-bg"
                            : "bg-gray-100 dark:bg-dark-bg"
                    }
              relative inline-flex h-[36px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-500 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${
                            enabled ? "translate-x-9" : "translate-x-0"
                        }
                pointer-events-none inline-block h-[32px] w-[34px] transform rounded-full bg-white dark:bg-dark-third shadow-lg ring-0 transition duration-200 ease-in-out`}
                    >
                        {darkTheme ? (
                            <>
                                <i className="bx bx-sun text-yellow-500 dark:hover:text-yellow-500 mt-1.5 inline-flex text-xl font-gilroy-black" />
                            </>
                        ) : (
                            <i className="bx bx-moon text-blue-900 mt-1.5 inline-flex text-xl font-gilroy-black"></i>
                        )}
                    </span>
                </Switch>
            </span>
        );
    };

    return ThemeIcon();
}
export default DarkModeSwitch;