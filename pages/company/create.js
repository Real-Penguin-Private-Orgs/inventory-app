/* eslint-disable @next/next/no-img-element */
import Button from "../../components/Button"
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

    const validation = () => {
        if(!data.name || !data.description || data.logo) {
            return false
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validation()
        if(isValid) {
            console.log(e.target.value)
        }
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
                          <div className="ml-2 mb-4">
                              <Input 
                                  type="email" 
                                  name="email" 
                                  id="nameInput"
                                  placeholder="Company Support Email"
                                  value={data.email}
                                  onChange={setData}
                              />
                              
                          </div>
                          <div className="ml-2 mb-4">
                                <Input 
                                    type="url" 
                                    name="logo" 
                                    id="nameInput"
                                    placeholder="Company Logo"
                                    value={data.logo}
                                    onChange={setData}
                                />
                                <div id="output">
                                        <span>Output</span>
                                        <img src={data.logo} alt=""/>
                                </div>
                          </div>
                          <div className="ml-2 mb-4">
                              <Button type="submit">Create</Button>
                          </div>
                  </Form>
            </Container>
      </div>
    )
  }

