import React  from 'react';

const List = ({title,author})=> {
    return (
        <tr>
            <td>
                {title}
            </td>
            <td>
                {author}
            </td>
        </tr>
    )
}
export default List;