function MyInput ({name = "404", type = "404", placeholder = "input here", label = "no data"}) {
    return (
        <label>
        {label} <br />
        <input type={type} name={name} placeholder={placeholder}></input>
        </label>

    );
}

export default MyInput;
