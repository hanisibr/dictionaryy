const PartOfSpeech = (props) => {
  return (
    <div className="partOfSpeech">
      {props.partOfSpeech.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
};

export default PartOfSpeech;
