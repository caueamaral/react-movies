import { useParams } from 'react-router-dom'
export default function MovieInfo() {
    const { id, title } = useParams()

    return (
        <>
            {id}
            {title}
            <div>Movie Info</div>
        </>
    )
}