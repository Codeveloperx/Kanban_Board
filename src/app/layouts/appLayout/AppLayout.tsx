import { ContentLayout } from './ContentLayout';
import { Header } from '@/shared/ui/Header';
import { Sidebar } from './sidebar/Sidebar';

const AppLyout = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        <ContentLayout />
      </div>
    </div>
  );
};

export default AppLyout;
