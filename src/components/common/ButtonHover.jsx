const ButtonHover = ({ children, className = "" }) => {
  return (
    <button
      class={`group relative inline-flex overflow-hidden rounded-full p-px transition-transform duration-300 active:scale-95 cursor-pointer ${className}`}
    >
      <span class="absolute inset-0 rounded-full transition-opacity duration-500 group-hover:opacity-0 bg-[conic-gradient(from_0deg,rgba(255,255,255,0.4)_0deg,rgba(255,255,255,0.45)_30deg,rgba(255,255,255,0.32)_58deg,rgba(255,255,255,0.12)_70deg,rgba(255,255,255,0)_78deg,rgba(255,255,255,0)_86deg,rgba(255,255,255,0.2)_94deg,rgba(255,255,255,0.45)_108deg,rgba(255,255,255,0.5)_125deg,rgba(255,255,255,0.45)_180deg,rgba(255,255,255,0.4)_225deg,rgba(255,255,255,0.2)_246deg,rgba(255,255,255,0)_254deg,rgba(255,255,255,0)_262deg,rgba(255,255,255,0.3)_270deg,rgba(255,255,255,0.65)_282deg,rgba(255,255,255,0.7)_290deg,rgba(255,255,255,0.6)_305deg,rgba(255,255,255,0.5)_330deg,rgba(255,255,255,0.4)_360deg)]"></span>

      <span class="absolute inset-px rounded-full bg-linear-to-br from-neutral-800 to-neutral-700"></span>

      <span class="absolute inset-0 translate-y-full rounded-full bg-[linear-gradient(91.05deg,#8E2EE0_7.21%,#AF7EF4_86.3%)] transition-transform duration-500 ease-in-out group-hover:translate-y-0"></span>

      <span
        class={`relative z-10 inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-medium leading-100 tracking-tight text-white ${className}`}
      >
        {children}
      </span>
    </button>
  );
};

export default ButtonHover;
