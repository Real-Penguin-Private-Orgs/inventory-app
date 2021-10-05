
export default function Food() {
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
    const res = await fetch('http://localhost:3000/api/item')
    const items = await res.json()
    return {
        props: {
           items
        }
    }
}