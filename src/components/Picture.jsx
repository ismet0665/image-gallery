//! {data} bu şekilde yollamalıyız.
const Picture = ({data}) => {
  console.log(data);

  return (
    <div className="picture" >
      {data.map((data , index) => {
        console.log(data);
        return (
          <div className="container" key={index}>
            <div className="imgdiv">
              <img src={data.src.large} alt="img" />
            </div>
            <div className="info">
              <p>{data.photographer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Picture;
