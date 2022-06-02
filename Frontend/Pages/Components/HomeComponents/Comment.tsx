import React, {useState} from "react";


export default function Comment({sender,comment}){

    const [liked, setLiked] = useState(false)


    function toggleLike(){
        setLiked(!liked)
    }

    const Liked = () =>             <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleLike} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>

    const Unlike = () =><svg xmlns="http://www.w3.org/2000/svg" onClick={toggleLike} className="h-6 w-6" fill="red" viewBox="0 0 24 24" stroke="red">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>

    return (
        <div className="comment">
            <div>

                <b className="people">{sender}</b> {comment}
            </div>
            {
                (liked) ? <Unlike/> : <Liked/>
            }
        </div>
    )
}