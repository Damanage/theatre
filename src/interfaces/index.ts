export interface RouteInterface {
  path: string;
  title: string;
  exact: boolean;
}

export interface IPerformance {
  id: string;
  type: string;
  attributes: {
    title: string;
    genres: string[] | null;
  };
}

export interface ISession {
  id: string;
  type: string;
  attributes: {
    from: string;
    to: string;
  };
  relationships: {
    performance: {
      data: {
        type: string;
        id: string;
      };
    };
  };
}

export interface IUserInfo {
  session: string;
  first_name: string;
  last_name: string;
  birthday: string;
  email: string;
  type: string;
  agree: boolean;
}
