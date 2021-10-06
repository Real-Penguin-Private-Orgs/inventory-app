import Item from '../../components/Item'

export default function Food({ items }) {
  return (
    <div>
        {items.map((item) => (
          <Item item={item} key={item.id}  />
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
    
    return {
        props: {
           items
        }
    }
}