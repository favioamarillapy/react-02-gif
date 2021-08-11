import React from 'react'
import ReactLoading from 'react-loading';


export const Loading = ({ loading }) => {

    return (
        <ReactLoading type={'bubbles'} color={'#20232a'} height={100} width={100} />
    )
}
