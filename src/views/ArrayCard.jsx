/* eslint-disable react/prop-types */
function ArrayCard(props) {
  return (
    <div className="arrayCard" id={props.idx}>
      <p>{props.num}</p>
    </div>
  );
}

export default ArrayCard;
