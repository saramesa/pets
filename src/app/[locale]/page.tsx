import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"
import styles from "./page.module.css"
import PetsGrid from "./components/PetsGrid/PetsGrid"
import { getPets } from "./infrastructure/services/getPets"
import Title from "./components/Title"

export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["pets"],
    queryFn: () => getPets(),
  })

  return (
    <div>
      <main className={styles.main}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Title />
          <PetsGrid />
        </HydrationBoundary>
      </main>
    </div>
  )
}
