import Item from '../../components/Item'

export default function Food({ items, company }) {
  return (
    <div>
        {items.map((item) => (
          <Item item={item} key={item.id} company={company} />
        ))}
    </div>
  )
}

/**
* 
* @param {import('next').GetServerSidePropsContext} context
* @returns
*/
export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:3000/api/item')
    const items = await res.json()
    const companyID = items.map((item) => item.company_id)
    const req = await fetch(`http://localhost:3000/api/company/${companyID}`)
    const company = await req.json()

    return {
        props: {
           items,
           company
        }
    }
}