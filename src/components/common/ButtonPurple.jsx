const ButtonPurple = ({ children, className = "" }) => {
  return (
    <button
      className={`group relative isolate overflow-hidden cursor-pointer bg-ppg h-12.75 rounded-114 flex items-center justify-center text-base leading-100 font-medium text-white transition-transform duration-300 active:scale-[0.98] ${className}`}
    >
      <span className="absolute inset-0 -z-10 translate-y-full bg-black/40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />

      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default ButtonPurple;
