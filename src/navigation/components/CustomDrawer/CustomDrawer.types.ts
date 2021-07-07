export type routeType = {
  item: { id: number; name: string; route: string };
};

export type Props = {
  navigation: {
    navigate: (route: string) => void;
  };
};
