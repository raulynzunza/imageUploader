const Alert = () => {
  return (
    <div
      role="alert"
      className="rounded-xl bg-[#198754] p-4 shadow-xl mt-5 animate__animated animate__fadeIn"
    >
      <div className="flex items-start gap-4">
        <span className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="flex-1">
          <p className="mt-1 text-sm text-white">Link copied to clipboard!</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
