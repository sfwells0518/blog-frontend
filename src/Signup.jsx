import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    console.log("handling submit");
    event.preventDefault()
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/users.json", params).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div id="signup">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type="password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
