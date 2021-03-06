import Container from '../../components/Container'
import Company from '../../components/Company'
import Head from 'next/head'

export default function CompanyIndex({ companies }) {
  return (
    <div>
      <Head>
          <title>Company | Inventory App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
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