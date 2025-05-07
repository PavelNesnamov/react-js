// import './UserCard.css'

// function UserCard(props) {

//   console.log(props)

//   return (
//     <div className="user-card">
//       <h4>Name: {props.name}</h4>
//       <p>Age: {props.age}</p>
//       <p>{props.hobby ? "Hobby: " + props.hobby : 'No hobby 🙅‍♂️'}</p>
//     </div>
//   );
// }

// export default UserCard;

import './UserCard.css'
//значение по умолчанию внутри деструктуризации
function UserCard({name='John Doe', age='404', hobby}) {



  return (
    <div className="user-card">
      <h4>Name: {name}</h4>
      <p>Age: {age}</p>
      <p>{hobby ? "Hobby: " + hobby : 'No hobby 🙅‍♂️'}</p>
    </div>
  );
}

export default UserCard;