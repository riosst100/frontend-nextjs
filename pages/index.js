import { useDispatch } from 'react-redux'
import { initializeStore } from '../lib/redux'
import { initializeApollo } from '../lib/apollo'
import useInterval from '../lib/useInterval'
import Layout from '../components/Layout'
import Clock from '../components/Clock'
import Counter from '../components/Counter'
import Submit from '../components/Submit'
import UserList, { USER_LIST_QUERY } from '../components/user/UserList'
import Link from 'next/link'

const IndexPage = () => {
  // Tick the time every second
  const dispatch = useDispatch()

  useInterval(() => {
    dispatch({
      type: 'TICK',
      light: true,
      lastUpdate: Date.now(),
    })
  }, 1000)

  return (
    <Layout title="Inovasi Aktif" homepage="true">
      <div className="content">
        <div>
          <div className="text-center">
            <table style={
              {
                "width": "100%",
                "borderSpacing": "10px",
                "borderCollapse": "separate"
              }
            }>
              <tbody>
                <tr>
                  <td>
                    <Link href="/register">
                      <a className="btn bg-main" style={{ "width": "100%" }}>Daftar</a>
                    </Link>
                  </td>
                  <td>
                    <Link href="/login">
                      <a className="btn bg-main" style={{ "width": "100%" }}>Masuk</a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <UserList />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const reduxStore = initializeStore()
  const apolloClient = initializeApollo()
  const { dispatch } = reduxStore

  dispatch({
    type: 'TICK',
    light: true,
    lastUpdate: Date.now(),
  })

  await apolloClient.query({
    query: USER_LIST_QUERY
  })

  return {
    props: {
      initialReduxState: reduxStore.getState(),
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}

export default IndexPage
