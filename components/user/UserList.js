import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'
import { getUserPhotoURL } from '../../lib/helper'

export const USER_LIST_QUERY = gql`
    query getUserList {
        userList {
            id
            name
            photo
            address {
                id
                street
                desa {
                    id
                    name
                }
                kecamatan {
                    id
                    name
                }
            }
        }
    }
`

export default function UserList() {
    const { loading, error, data } = useQuery(USER_LIST_QUERY)
    const { userList: users } = data
    return (
        <>
            {users && users.length ? users.map((user, index) => (
                <div key={index}>
                    <hr />
                    <div>
                        <Link href={"/user/" + user.id}>
                            <a className="d-flex mb-2 mt-2">
                                <div className="flex-shrink-0">
                                    <span className="active-dot"></span>
                                    <img style={
                                        {
                                            "width": "40px",
                                            "height": "40px",
                                            "marginTop": "1px"
                                        }
                                    } src={getUserPhotoURL(user.photo)} className="profile-img" alt="Profile Photo" />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <div style={{ "color": "#444444", "fontWeight": "bold" }}>{user.name}</div>
                                    <div style={{ "fontSize": "12px", "color": "#444444z" }}>{user.address.desa.name}, {user.address.kecamatan.name}</div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            )) : loading ? 'Loading..' : error ? { error } : 'Tidak ada data'}
        </>
    )
}
