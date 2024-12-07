import PetDetail from "./components/PetDetail"


interface Props {
  params: {
    id: string
  }
}

const PetDetailPage: React.FC<Props> = ({ params }) => {
  const { id } = params
  return <PetDetail id={id} />
}

export default PetDetailPage
