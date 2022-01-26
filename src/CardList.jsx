import "./CardList.scss";

// for dynamic cover
const coverStyle = {
  width: "100%",
  height: "90px",
  // background-color: blue;
  backgroundImage: "url(" + "../public/assets/img/covers/cover-1.jpg" + ")",
  backgroundColor: "green",
  backgroundSize: "cover",
};

function CardList() {
  return (
    <section className="card-list">
      <div className="card">
        <div style={coverStyle}></div>
        <div className="card-avatar">
          <img
            className="avatar"
            src="./assets/img/avatars/face-1.jpg"
            alt="profile "
          />
          <div className="follow-btn">follow</div>
        </div>
        <div className="card-body">
          <div className="handler">
            <div className="name">John Doe</div>
            <div className="user_name">@jD</div>
          </div>
          <p className="bio">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            molestiae nesciunt eum voluptatem mollitia sit!
          </p>
          <div className="follower_category">
            <div className="follower_count">
              <span className="number">1.2K</span> Followers
            </div>
            <div className="category">Cosplay</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardList;
