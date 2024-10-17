export default function Songs({song,brand,release}){
    return (
        <div className="song-container">
            <h4>Brand : {brand}</h4>
            <p>Song name : {song}</p>
            <p>Release Date : {release}</p>
        </div>
    )
}