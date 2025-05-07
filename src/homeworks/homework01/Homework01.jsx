import myPhoto from './../homework01/myPhoto.jpg'
import malaga2021 from './../homework01/malaga2021.jpg'
import './Homework01.css'

function homework01() {
    return (
        <div className="react-container">
            <img src={myPhoto} alt="" />
            <img src={malaga2021} alt="" />
            <h1>Pavel Nesnamov 💻 & 🧳 & ✈️</h1>
            <ul className="li">
                <li>я учусь на программиста</li>
                <li>а так же</li>
                <li>люблю путешествовать</li>
                <li>купаться, загорать</li>
                <li>и заводить новых друзей</li>
            </ul>
        </div>
    )
}

export default homework01;