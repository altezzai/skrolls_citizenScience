import { cn } from '../../utils/utils';

export const Photogroup = ({ images }) => {
  const width = Math.max(24, images.length * 15) + 'px';

  return (
    <div className="relative" style={{ width }}>
      {images.map((img, index) => {
        const offset = 12 * index;
        return (
          <img
            key={index}
            style={{ left: `${offset}px` }}
            src={img}
            className={cn(
              `top-0 h-6 w-6 rounded-full border-2 border-border-muted`,
              {
                absolute: index > 0,
              }
            )}
          />
        );
      })}
    </div>
  );
};
