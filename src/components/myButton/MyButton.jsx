import './MyButton.css';

function MyButton({
  func = () => console.log('click!'),
  type = 'button',
  text = 'Run',
  className="my-button"
  
}) {
  return (
    <button onClick={func} type={type} className={'my-button'} >
    {text}
    </button>
  );
}

export default MyButton;
