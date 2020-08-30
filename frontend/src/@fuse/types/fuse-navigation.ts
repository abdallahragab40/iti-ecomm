export interface FuseNavigationItem {
  id: string;
  title: string;
  type: 'item' | 'group' | 'collapsable';
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  externalUrl?: boolean;
  openInNewTab?: boolean;
  function?: any;
  badge?: {
    title?: string;
    bg?: string;
    fg?: string;
  };
  children?: FuseNavigationItem[];
}

export interface FuseNavigation extends FuseNavigationItem {
  children?: FuseNavigationItem[];
}
