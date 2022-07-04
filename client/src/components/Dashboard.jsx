import { useEffect, useState } from "react";
// parent component is App

export default function Dashboard(props) {
  console.log("props", props);
  const [user, setUser] = useState(props.login.user.email);

  useEffect(() => {
    const currentUser = localStorage.getItem("benefitsUser");
    console.log("currentUser", currentUser);
    const benefitsUser = JSON.parse(currentUser);
    console.log("benefitsUser", benefitsUser);
    setUser(benefitsUser);
  }, []);

  return (
    <div>
      Dashboard
      <h3>Hi {user}!</h3>
    </div>
  );
}
