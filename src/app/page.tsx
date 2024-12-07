import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"

import PetsGrid from "./components/PetsGrid/PetsGrid"
import { getPets } from "./infrastructure/services/getPets"


export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["pets"],
    queryFn: () => getPets(),
  })

  return (
    <div>
      <main style={{ padding: "100px" }}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <PetsGrid />
        </HydrationBoundary>
      </main>
    </div>
  )
}
