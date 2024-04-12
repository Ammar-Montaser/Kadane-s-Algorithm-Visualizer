/* eslint-disable react/prop-types */
function ArrayCard(props) {
  return (
    <div className="arrayCard" id={props.idx}>
      <h1>{props.num}</h1>
    </div>
  );
}

export default ArrayCard;
