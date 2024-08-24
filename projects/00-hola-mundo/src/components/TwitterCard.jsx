import '../assets/TwitterCard.css'
import { useState } from "react";

export function TwitterCard ({ children, formatUserName, username = 'unknown', initialIsFollowing}) {

    const imageSrc = `https://unavatar.io/${username}`;

    const [isFollowing, setIsFollowing ] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img src={ imageSrc } alt="User Image" className="tw-followCard-avatar" />
                <div className="tw-followCard-info">
                    { children }
                    <span className="tw-followCard-infoUserName">{ formatUserName(username) }</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{ text }</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}