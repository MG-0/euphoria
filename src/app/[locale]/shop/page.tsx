import { useTranslations } from "next-intl"
export default function Shop(){
    const t = useTranslations("About")
    return <main><h1>{t('title')}</h1>
    <p>{t('description')}</p>
    </main>

}