interface ICatrgory {
  text: string;
  active: boolean;
  onActive: (value: string) => void;
}
function Category(props: ICatrgory) {
  const { text, active, onActive } = props;
  const classes = `text-black ${
    active ? "active-category" : "non-active-category"
  } search-category`;
  const handleActivity = () => {
    onActive(text);
  };
  return (
    <a href="#" className={classes} onClick={handleActivity}>
      {text}
    </a>
  );
}

export default Category;
