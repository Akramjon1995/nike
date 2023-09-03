const ShoeCard = ({ imgURL, shoeImg, changeShoeImg }) => {
  const handleClick = () => {
    if (shoeImg !== imgURL.bigShoe) {
      changeShoeImg(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        shoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgURL.thumbnail} alt={imgURL.thumbnail} />
      </div>
    </div>
  );
};

export default ShoeCard;
