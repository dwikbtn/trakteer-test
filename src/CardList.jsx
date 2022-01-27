import "./CardList.scss";

import Card from "./components/Card/Card";
import users from "./JSON/users.json";

function CardList() {
  return (
    <section className="card-list">
      {/* <Card user={users.users[0]} /> */}
      {users.users.map((userList) => {
        return <Card user={userList} />;
      })}
    </section>
  );
}

export default CardList;
