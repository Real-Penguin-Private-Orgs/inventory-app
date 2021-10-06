

export default function ItemID({ item, company }) {
    return (
      <div>
            {item.name}
            {company.name}
      </div>
    )
}

/**
* 
* @param {import('next').GetServerSidePropsContext} context
* @returns
*/
export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/item/${context.params.id}`)
    const item = await res.json()
    const req = await fetch(`http://localhost:3000/api/company/${item.company_id}`)
    const company = await req.json()

    return {
        props: {
            item,
            company
        }
    }
}