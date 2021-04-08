import "../assets/styles/Login.css";
const Joinus = () => {
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};
export default Joinus;
