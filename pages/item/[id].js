

export default function ItemID({ item }) {
    return (
      <div>
            {item.name}
            {item.company.name}
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

    return {
        props: {
            item
        }
    }
}