const NoResults = ({ title, message, resolution }) => {
  return (
    <div>
      <p className="title">{title}</p>
      <p>{message}</p>
      <p>{resolution}</p>
    </div>
  );
};

export default NoResults;
