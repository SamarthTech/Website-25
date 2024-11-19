import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ src, alt, className }) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt || 'image'}
      effect="blur"
      className={className}
      loading="lazy"
    />
  );
};

export default LazyImage;
