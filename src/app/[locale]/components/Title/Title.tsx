import { useTranslations } from "next-intl"

const Title = () => {
  const t = useTranslations()
  return (
    <h1
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      {t("Home.title")}
    </h1>
  )
}
export default Title
