"use client";

import { AnimatePresence, motion } from "framer-motion";
import { createContext, useEffect, useState } from "react";


export const ErrorContext = createContext();

export function ErrorProviders({ children }) {

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        let timer1 = setTimeout(() => {
            setErrors((e) => {
                let temp = [...e]
                temp.pop()
                return temp
            })
        }, 3500)

        return () => {
            clearTimeout(timer1);
        };
    }, [errors])

    return (
        <ErrorContext.Provider value={{ errors, setErrors }}>
            <div className="error-container">
                <AnimatePresence>
                    {
                        errors &&
                        errors.map((err, i) => {
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 100, y: 0 }} exit={{ opacity: 0, y: 50 }} className="error-object">
                                    {err}
                                </motion.div>
                            )
                        })
                    }
                </AnimatePresence>
            </div>
            {children}
        </ErrorContext.Provider>
    );
}
