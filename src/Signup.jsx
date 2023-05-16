export function Signup() {
  return (
    <div id="signup">
      <h3>Sign Up</h3>
      <form action="http://localhost:3000/users.json" method="POST">
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
