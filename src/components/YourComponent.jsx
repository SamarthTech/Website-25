import LazyImage from './LazyImage';

const YourComponent = ({ data }) => {
  return (
    <div className="image-wrapper">
      <LazyImage 
        src={data.img} 
        alt={data.title}
        className="your-image-class"
      />
    </div>
  );
};

export default YourComponent; 