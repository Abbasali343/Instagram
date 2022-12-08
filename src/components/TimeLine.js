import { useNavigate } from "react-router-dom";
import img1 from "../images/image1.jpeg";
import img2 from "../images/image2.jpeg";
import img3 from "../images/image3.jpeg";
import img4 from "../images/image4.webp";
import img5 from "../images/profile1.jpeg";
import img6 from "../images/profile2.jpeg";
import img7 from "../images/profile3.jpeg";
import img8 from "../images/profile4.webp";
import style from "../css/Timeline.module.css";

export default function TimeLine() {
  const navigate = useNavigate();

  const posts = [
    {
      profileImage: img5,
      userName: "HairyPoppins",
      description: "work in the finance industry",
      picture: img1,
      postDescription:
        "dolor sit amet, consectetue adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      comments: "/comments",
      time: "2 hours ago",
    },
    {
      profileImage: img6,
      userName: "fedora_the_explorer",
      description: "an avid gym-goer",
      picture: img2,
      postDescription:
        "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,",
      comments: "/comments",
      time: "4 hours ago",
    },
    {
      profileImage: img7,
      userName: "real_name_hidden",
      description: "really into movies",
      picture: img3,
      postDescription:
        "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. ",
      comments: "/comments",
      time: "3 hours ago",
    },
    {
      profileImage: img8,
      userName: "YellowSnowman",
      description: "driven, goal-oriented",
      picture: img4,
      postDescription:
        "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
      comments: "/comments",
      time: "8 hours ago",
    },
  ];

//   function gotoComments() {
//     navigate("/comments");
//   }

  return (
    <>
      {posts.map((item) => (
        <div className={style.container}>
          <div className={style.header}>
            <img className={style.image} src={item.profileImage} />
            <div className={style.intro}>
              <h5 className={style.title}>{item.userName}</h5>
              <h6 className={style.desc}>{item.description}</h6>
            </div>
          </div>
          <div className={style.body}>
            <img className={style.picture} src={item.picture} />
          </div>
          <div className={style.footer}>
            <h5 className={style.postdesc}>{item.postDescription}</h5>
            <h6
              className={style.tocomments}
              onClick={() =>
                navigate("/comments", {
                  replace: true,
                  state: {
                    img: item.profileImage,
                    name: item.userName,
                    desc: item.description,
                  },
                })
              }
            >
              View All Comments
            </h6>
            <p className={style.time}>{item.time}</p>
          </div>
        </div>
      ))}
    </>
  );
}
