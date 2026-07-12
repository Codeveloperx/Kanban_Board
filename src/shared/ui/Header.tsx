type Propstype = {
  children?: React.ReactNode;
};

export const Header = ({ children }: Propstype) => {
  return (
    <header className="bg-gray-800 text-white p-4 w-full">
      <div className="flex items-center justify-between">
        <span className="text-lg">Kanban Board</span>
        <div>{children}</div>
      </div>
    </header>
  );
};
