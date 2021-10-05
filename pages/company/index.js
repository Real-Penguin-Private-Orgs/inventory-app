import Container from '../../components/Container'
import Company from '../../components/Company'

export default function CompanyIndex({ companies }) {
  return (
    <div>
        <Container>
              {companies.map((company) => (
                <Company key={company.id} company={company} />
              ))}
        </Container>
    </div>
  )
}

/**
* 
* @param {import('next').GetServerSidePropsContext} context
* @returns
*/
export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:3000/api/company')
    const companies = await res.json()

    return {
        props: {
           companies
        }
    }
}