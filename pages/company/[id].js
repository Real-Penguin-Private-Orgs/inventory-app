import  Head from 'next/head'

export default function CompanyID({ company }) {
  return (
    <div>
        <Head>
            <title>{company.name} | Inventory App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    </div>
  )
}


/**
* 
* @param {import('next').GetServerSidePropsContext} context
* @returns 
*/
export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/company/${context.params.id}`, {
        method: 'GET'
    })
    const company = await res.json()

    if(!company) {
      return {
        notFound: true,
      }
    }
    
    return {
       props: {
          company
       }
    }
}

