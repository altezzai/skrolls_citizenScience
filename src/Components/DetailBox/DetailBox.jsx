
const DetailBox = ({ children, heading }) => {
  return (
    <div className="mb-3 flex w-full flex-col items-center rounded-xl bg-bg-secondary p-4">
      <div className="flex w-full items-center rounded-lg bg-textarea pl-3 text-left text-base font-semibold text-text-secondary py-2">
        {heading}
      </div>
      {children}
    </div>
  );
};

export default DetailBox;