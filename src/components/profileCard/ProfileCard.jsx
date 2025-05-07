function profileCard ({obj}) {
    return (
        <>
        {obj.firstname && obj.lastname ? (
            <>
            <img src={obj.avatar} alt={obj.firstname + " " + obj.lastname} />
            <p>
                Name: <span>{obj.firstname} {obj.lastname}</span>
            </p>
            
            </>
        )}
        </>
    )
}

const card = {
    avatar: 'https://uprostim.com/wp-content/uploads/2021/01/image257-12.jpg',
    firstname: 'Масяня',
    profession: 'Визажист-дизайнер',
    hobby: 'Восточные единоборства'
};
