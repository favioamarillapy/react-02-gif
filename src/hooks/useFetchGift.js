import { useEffect, useState } from "react"
import { getData } from '../helpers/GifHelper';

export const useFetchGift = (category) => {

    const [data, setData] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getData(category)
            .then(gifs => {
                setData({
                    data: gifs,
                    loading: false
                });
            });

    }, [category])

    return data;

}
