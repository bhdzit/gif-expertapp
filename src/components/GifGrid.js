
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifsGridItem } from './GifsGridItem';

export const GifGrid = ({ category }) => {


const {data:images,loading}= useFetchGifs(category);
    return (
        <>
            <h3>{loading &&"Cargando..."}</h3>
            <div className="card-grid">

                
                    {
                        images.map((img) => (
                            <GifsGridItem key={img.id} {...img} />
                        ))


                    }
                

                </div>
        </>
    )
}
