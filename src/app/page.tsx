import Image from "next/image"
import styles from "./page.module.css"

interface Pet {
  description: string
  height: number
  id: number
  kind: string
  length: number
  name: string
  photo_url: string
  weight: number
}

export default async function Home() {
  const response = await fetch(
    "https://my-json-server.typicode.com/Feverup/fever_pets_data/pets"
  )
  const pets: Pet[] = await response.json()
  return (
    <div>
      <main style={{ padding: "100px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "3em 2.5em",
          }}
        >
          {pets.map((pet: Pet) => (
            <div
              key={pet.id}
              style={{
                padding: "1.5em",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 3px",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr",
                  gridAutoFlow: "column",
                }}
              >
                <Image
                  style={{ objectFit: "cover" }}
                  src={pet.photo_url}
                  alt="pet image"
                  width={100}
                  height={100}
                  priority
                />
                <div
                  style={{
                    display: "grid",
                    gridAutoFlow: "rows",
                    gap: "0.5em",
                  }}
                >
                  <p>
                    <b>Name: </b>
                    {pet.name}
                  </p>
                  <p>
                    <b>Kind: </b> {pet.kind}
                  </p>
                  <p>
                    <b>Weight: </b>
                    {pet.weight}
                  </p>
                  <p>
                    <b>Heigth: </b>
                    {pet.height}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
