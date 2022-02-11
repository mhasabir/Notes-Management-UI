export interface ISidebarItem {
  id: number;
  label: string;
  icon: string;
  route: string;
}
export class SidebarItem implements ISidebarItem {
  constructor(id: number, label: string, icon: string, route: string) {
    this.id = id;
    this.label = label;
    this.icon = icon;
    this.route = route;
  }
  id: number = 0;
  label: string = '';
  icon: string = '';
  route: string = '';
}
