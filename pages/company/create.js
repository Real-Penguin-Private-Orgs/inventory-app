import Container from "../../components/Container"
import useForm from "../../hooks/useForm"

export default function Create() {
    const [data, setData] = useForm({
        name: '',
        description: '',
        url: '',
        logo: '',
        email: ''
    })

    const handleSubmit = (e) => {
      e.preventDefault()
    }

    return (
      <div>
            <Container>
                
            </Container>
      </div>
    )
  }

