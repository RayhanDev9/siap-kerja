import Logo from "../../../ui/Logo";

function Header() {
  return (
    <header className="flex justify-between gap-2.5 bg-white px-3 py-4">
      <div className="flex gap-2.5">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="border-none outline-0"
            fill="blue"

            viewBox="0 0 24 24"
            strokeWidth={0}
            stroke="currentColor"
            className="size-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
            />
          </svg>
        </div>
        <Logo type={"small"} />
      </div>
      <div className="flex items-center rounded-full bg-amber-500">
        <img
          className="h-16 w-16 rounded-full object-cover object-[top]"
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
