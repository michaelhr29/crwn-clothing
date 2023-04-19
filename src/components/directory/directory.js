import CategoryItem from '../categoryItem/categoryItem';
import './directory.scss';

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
