type Propstype = {
  children?: React.ReactNode;
  title?: string;
};

export const Header = ({ children, title = 'Kanban Board' }: Propstype) => {
  return (
    <header className="bg-white text-gray-800 p-4 w-full border-b border-gray-200">
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">{title}</span>
        <div>{children}</div>
      </div>
    </header>
  );
};
