const Badge = ({ children, className = "" }) => {
  return (
    <button
      className={`relative inline-flex rounded-full p-px transition-transform duration-300 active:scale-95 ${className}`}
    >
      <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(255,255,255,0.4)_0deg,rgba(255,255,255,0.45)_30deg,rgba(255,255,255,0.32)_58deg,rgba(255,255,255,0.12)_70deg,rgba(255,255,255,0)_78deg,rgba(255,255,255,0)_86deg,rgba(255,255,255,0.2)_94deg,rgba(255,255,255,0.45)_108deg,rgba(255,255,255,0.5)_125deg,rgba(255,255,255,0.45)_180deg,rgba(255,255,255,0.4)_225deg,rgba(255,255,255,0.2)_246deg,rgba(255,255,255,0)_254deg,rgba(255,255,255,0)_262deg,rgba(255,255,255,0.3)_270deg,rgba(255,255,255,0.65)_282deg,rgba(255,255,255,0.7)_290deg,rgba(255,255,255,0.6)_305deg,rgba(255,255,255,0.5)_330deg,rgba(255,255,255,0.4)_360deg)]"></span>

      <span className="absolute inset-px rounded-full bg-linear-to-br from-neutral-800 to-neutral-700"></span>

      <span
        className={`relative z-10 inline-flex items-center justify-center py-1.5 pl-4 pr-1.5 gap-2.5 tracking-tight text-white ${className}`}
      >
        {children}
      </span>
    </button>
  );
};

export default Badge;
