import axios from "axios";



const Chat_Authentication = (props) => {
//     const onSubmit = (e) => {
//       e.preventDefault();
//       const { value } = e.target[0];
//       axios
//       .post("http://localhost:3000/authenticate", { username: value })
//       .then((r) => props.onAuth({ ...r.data, secret: value }))
//       .catch((e) => console.log("Auth Error", e));
//   };


    //   props.onAuth({ username: value, secret: value });
    // };
  


    
const chatbutton_click = (e) => {
  e.preventDefault();

  const userData = JSON.parse(localStorage.getItem("user"));
  const email = userData.email;
  console.log("User Email:", email);



  axios
  .post("http://localhost:3000/authenticate", { username: email })
  .then((r) => props.onAuth({ ...r.data, secret: email }))
  .catch((e) => console.log("Auth Error", e));
};
    return (
      
      <div className="background">
        <form onSubmit={chatbutton_click} className="form-card">
          <div className="form-title">Welcome👋</div>
{/*   
          <div className="form-subtitle">Set a username to get started</div>
   */}
          <div className="auth">
            {/* <div className="auth-label">Username</div>
            <input className="auth-input" name="username" /> */}
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Chat_Authentication;