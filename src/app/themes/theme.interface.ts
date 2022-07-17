

export interface IThemeProperties {
    primaryColor: string;
    secondaryColor: string;
    cardColor: String;
    cardColorBorder: String;
    textPrimary: string;
   

    // Se pueden añadir + propiedades si queremos ampliar
}

export interface ITheme {
    default: IThemeProperties;
    dark?: IThemeProperties;
    // Otros themes
}