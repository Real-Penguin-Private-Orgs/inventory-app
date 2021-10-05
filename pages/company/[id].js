

export default function CompanyID({ company }) {
  return (
    <div>
        
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
    
    return {
       props: {
          company
       }
    }
}

