import Container from "../../components/Container"
import Form from "../../components/Form"
import Input from "../../components/Input"
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
                  <Form onSubmit={handleSubmit}>
                          <h2 className="text-center font-bold m-2 ml-1">Create Company</h2>
                          <div>
                              <Input 
                                  type="text" 
                                  name="name" 
                                  id="nameInput"
                                  placeholder="Company Name"
                                  value={data.name}
                                  onChange={setData}
                              />
                          </div>
                          <div className="ml-2 mb-4">
                              <Input 
                                  type="text" 
                                  name="description" 
                                  id="nameInput"
                                  placeholder="Company Description"
                                  value={data.description}
                                  onChange={setData}
                              />
                          </div>
                  </Form>
            </Container>
      </div>
    )
  }

