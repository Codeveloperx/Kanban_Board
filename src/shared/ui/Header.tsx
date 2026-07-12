type Propstype = {
  children?: React.ReactNode;
  title?: string;
};

export const Header = ({ children, title = 'Kanban Board' }: Propstype) => {
  return (
    <header className="bg-gray-800 text-white p-4 w-full">
      <div className="flex items-center justify-between">
        <span className="text-lg">{title}</span>
        <div>{children}</div>
      </div>
    </header>
  );
};
