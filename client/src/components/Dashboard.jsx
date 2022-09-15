import { useEffect, useState } from "react";
// parent component is App

export default function Dashboard(props) {
  // console.log("props", props);
  const [user, setUser] = useState(props.login.email);
  

  useEffect(() => {
    const currentUser = localStorage.getItem("benefitsUser");
    // console.log("currentUser", currentUser);
    const benefitsUser = JSON.parse(currentUser);
    // console.log("benefitsUser", benefitsUser);
    setUser(benefitsUser)
    .then((currentUser) => {
      fetch("http://localhost:9000/dashboard", {
      method: "POST",
      body: currentUser,
      headers: {
        "Content-Type": "application/json",
      }})
    })
  }, []);

  const getData = () => {
    const postURL = "http://localhost:9000/dashboard"
    fetch(postURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  // console.log("user", user);
  // console.log("props", props);

  return (
    <div>
      Dashboard
      <h3>Hi {user}! {() => getData}</h3>
    </div>
  );
}
