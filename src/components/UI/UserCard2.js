import star from "../../images/star.png"
const UserCard2 = (props) => {
  return (
    <div className="memcarddiv">
      <h2 className="memcardhead">Generated IET-Hub Membership Card</h2>
      <img className="userimg" src={props.imgg} alt="" />
      <img className="userqr"src={props.qr} alt="" />

      <div className="details">
        <p className="style extreme">
          IET Hub is very proud to have <br />
          <span className="headname name">  {props.name} </span> <br />
          <span className="style">
            of batch <span className="headname">{props.gradYear}, </span> <br />
          </span>
           <span className="headname">{props.branch} </span>
          <span className="style"> branch <br/>
          as it's </span>
          <span className="headname"> {props.member} </span> member.
        </p>
        <h2 className="karma">IET Karma Points <img className="starr" src={star} alt="" /> {props.karma}</h2>
      </div>
    </div>
  );
};

export default UserCard2;
