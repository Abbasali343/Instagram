import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import img1 from "../images/profile5.jpeg";
import img2 from "../images/profile6.jpeg";
import img3 from "../images/profile7.jpeg";
import img4 from "../images/profile8.jpeg";
import img5 from "../images/back.png";
import style from "../css/Comments.module.css";

export default function Comments() {
  const navigate = useNavigate();
  const state = useLocation();
  const data = state.state;

  const comments = [
    {
      name: "YellowSnowman",
      comment:
        "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem",
      profileImage: img1,
      time: "2 hours ago",
    },
    {
      name: "Joe Not Exotic",
      comment: "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
      profileImage: img2,
      time: "2 hours ago",
    },
    {
      name: "username_copied",
      comment:
        "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum",
      profileImage: img3,
      time: "2 hours ago",
    },
    {
      name: "anonymouse",
      comment: "vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a",
      profileImage: img4,
      time: "2 hours ago",
    },
  ];

  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <img className={style.back} src={img5} onClick={()=>navigate("/")} />
          <h1 className={style.comments}>Comments</h1>
        </div>
        <hr />
        <div className={style.body}>
          <div className={style.user}>
            <img className={style.image} src={data.img} />
            <div className={style.userdesc}>
              <h4 className={style.name}>{data.name}</h4>
              <p className={style.desc}>{data.desc}</p>
            </div>
          </div>
          <hr />
          {comments.map((item) => (
            <div className={style.allcomments}>
              <img className={style.commentimage} src={item.profileImage} />
              <div className={style.commenttext}>
                <h4 className={style.commentname}>{item.name}</h4>
                <p className={style.text}>{item.comment}</p>
                <h6 className={style.time}>{item.time}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
