const Person = (props) => {
  const { id, name, age, image } = props.details;
  return (
    <div className="person">
      <img src={image} alt={id} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};
export default Person;
