import Spinner from "../../assets/icons/Spinner";

const Loader = ({
  spinning,
  children,
  message,
}: {
  message?: string;
  spinning: boolean;
  children: any;
}) => {
  return spinning ? (
    <div className="relative">
      <div className="flex flex-col items-center justify-center">
        <div className="loader">
          <Spinner
            fill="#001f5c"
            className="animate-spin-slow absolute"
          />
        </div>
        <p className="absolute loader top-[4.7rem] text-[1.1rem] font-semibold">
          {message}
        </p>
      </div>
      <div className="spin_blur">{children}</div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Loader;
