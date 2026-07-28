import { ToggleButton } from './ToggleButton';
import { Tooltip } from '@/shared/ui/Tooltip';

interface PropsTypes {
  title?: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const SidebarHeader = ({ title = 'Kanban', isOpen, onToggle }: PropsTypes) => {
  return (
    <header
      className={`flex h-15 items-center px-2 ${isOpen ? 'justify-between' : 'justify-center'}`}
    >
      {isOpen ? (
        <div className="relative flex h-8 w-10 items-center rounded-md p-2">
          <span className="absolute text-xl font-bold whitespace-nowrap">{title}</span>
        </div>
      ) : (
        <div className="group/kb relative flex rounded-md">
          <div className="relative flex h-8 w-10 p-2">
            <span className="absolute inset-0 flex items-center justify-center text-xl font-bold transition-opacity duration-200 group-hover/kb:opacity-0">
              KB
            </span>

            <Tooltip label="Expandir sidebar" className="absolute inset-0">
              <ToggleButton
                label="Expandir sidebar"
                onClick={onToggle}
                className="flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-200 group-hover/kb:opacity-100"
              />
            </Tooltip>
          </div>
        </div>
      )}

      {isOpen && (
        <Tooltip label="Colapsar sidebar">
          <ToggleButton label="Colapsar sidebar" onClick={onToggle} className="p-2" />
        </Tooltip>
      )}
    </header>
  );
};
