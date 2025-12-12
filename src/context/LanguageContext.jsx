import { createContext, useContext, useState, useMemo } from "react";
import en from "../locales/en";
import vi from "../locales/vi";
import ja from "../locales/ja";

import { enUS, jaJP } from "@mui/material/locale";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const locales = { vi, en, ja };
const muiLocales = { en: enUS, ja: jaJP, vi: {} };

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("vi");

  const theme = useMemo(
    () =>
      createTheme(
        {
          palette: { primary: { main: "#1976d2" } },
        },
        muiLocales[lang]
      ),
    [lang]
  );

  const t = (key) => locales[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LanguageContext.Provider>
  );
};
