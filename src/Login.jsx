import axios from "axios";

export function Login() {
  const handleSubmit = (event) => {
    console.log("handling submit");
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/sessions.json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
    }).catch(error => {
      console.log(error.response.data)
    })
  }
  return (
    <div id="login">
      <h3>Log In</h3>
      <form onSubmit={handleSubmit}>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}