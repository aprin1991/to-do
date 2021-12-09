import { useEffect, useState } from "react";
import ButtonLoading from "./ButtonLoading";
import { IProps } from "./type";
const RippleButton = ({
  children,
  onClick,
  classes,
  disabled = false,
  loading = false,
  id = "",
}: IProps) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <button
      className={`ripple-button relative ${classes}`}
      disabled={disabled}
      id={id}
      onClick={(e: React.MouseEvent<HTMLElement>): void => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        setCoords({ x: e.clientX - left, y: e.clientY - top });
        onClick && onClick(e);
      }}
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ""
      )}
      <div className={`w-full ${loading ? "text-transparent" : ""}`}>
        {children}
      </div>
      {loading && <ButtonLoading />}
    </button>
  );
};

export default RippleButton;
