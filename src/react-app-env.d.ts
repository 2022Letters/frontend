/// <reference types="react-scripts" />

interface IEventInfo {
  category: string;
  bouquet: string;
  date: string;
  title: string;
  id: number;
}
interface IMenu {
  currentTargetEvent: number;
  toggleMenu(event: React.MouseEvent<HTMLButtonElement>): void;
}
