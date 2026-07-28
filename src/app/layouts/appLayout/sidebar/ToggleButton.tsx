import { Button } from '@/shared/ui/Button';
import { PanelLeft } from 'lucide-react';

interface PropsTypes {
  label: string;
  onClick: () => void;
  className?: string;
}

export const ToggleButton = ({ label, onClick, className = '' }: PropsTypes) => (
  <Button icon={PanelLeft} label={label} onClick={onClick} className={className} />
);
